import { ofetch } from 'ofetch'

import { TelegramProxyResponseSchema, TTelegramProxyResponse } from './telegram-proxy.schema'

const TELEGRAM_PROXY_API_PATH = '/api/telegram-proxies'

export const getTelegramProxies = async (shortUuid: string): Promise<TTelegramProxyResponse> => {
    const response = await ofetch<object>(
        `${TELEGRAM_PROXY_API_PATH}/${encodeURIComponent(shortUuid)}`
    )

    return TelegramProxyResponseSchema.parseAsync(response)
}
