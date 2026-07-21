import consola from 'consola/browser'
import { ofetch } from 'ofetch'

import {
    TelegramProxyErrorResponseSchema,
    TelegramProxyResponseSchema,
    TTelegramProxyResponse
} from './telegram-proxy.schema'

const TELEGRAM_PROXY_API_PATH = '/api/telegram-proxies'

export type TTelegramProxyApiResult =
    | { data: TTelegramProxyResponse; status: 'success' }
    | { status: 'bad-request' }
    | { status: 'invalid-response' }
    | { status: 'not-found' }
    | { status: 'unavailable' }

export const getTelegramProxies = async (shortUuid: string): Promise<TTelegramProxyApiResult> => {
    try {
        const response = await ofetch.raw<object>(
            `${TELEGRAM_PROXY_API_PATH}/${encodeURIComponent(shortUuid)}`,
            { ignoreResponseError: true }
        )

        switch (response.status) {
            case 200: {
                const parsedResponse = await TelegramProxyResponseSchema.safeParseAsync(
                    response._data
                )

                if (!parsedResponse.success) {
                    consola.error(
                        'Telegram proxy API returned an invalid response:',
                        parsedResponse.error.issues
                    )
                    return { status: 'invalid-response' }
                }

                return { data: parsedResponse.data, status: 'success' }
            }
            case 400:
                consola.warn('Telegram proxy API rejected the request with status 400.')
                return { status: 'bad-request' }
            case 404:
                consola.warn('Telegram proxy API did not find the subscription.')
                return { status: 'not-found' }
            case 502: {
                const errorResponse = TelegramProxyErrorResponseSchema.safeParse(response._data)

                if (errorResponse.success) {
                    consola.error('Telegram proxy upstream returned an invalid response.')
                    return { status: 'invalid-response' }
                }

                consola.error('Telegram proxy API is unavailable.')
                return { status: 'unavailable' }
            }
            default:
                consola.error(`Telegram proxy API returned unexpected status ${response.status}.`)
                return { status: 'unavailable' }
        }
    } catch (error) {
        consola.error('Telegram proxy API request failed:', error)
        return { status: 'unavailable' }
    }
}
