import axios, { AxiosError, AxiosInstance } from 'axios';

import { Injectable, Logger } from '@nestjs/common';

import { TypedConfigService } from '@common/config/app-config';

import { TelegramProxyResponseSchema, TTelegramProxyResponse } from './telegram-proxy.schema';
import { TELEGRAM_PROXY_SHORT_UUID_PLACEHOLDER } from './telegram-proxy.constants';

export type TTelegramProxyApiResult =
    | { data: TTelegramProxyResponse; status: 'success' }
    | { status: 'bad-request' }
    | { status: 'invalid-response' }
    | { status: 'not-found' }
    | { status: 'unavailable' };

@Injectable()
export class TelegramProxyService {
    private readonly axiosInstance: AxiosInstance;
    private readonly logger = new Logger(TelegramProxyService.name);
    private readonly telegramProxyApiUrlTemplate: string;

    constructor(configService: TypedConfigService) {
        this.telegramProxyApiUrlTemplate = configService.getOrThrow('TELEGRAM_PROXY_API_URL');
        this.axiosInstance = axios.create({
            timeout: 10_000,
            headers: {
                'user-agent': 'Remnawave Subscription Page',
            },
        });
    }

    public async getTelegramProxies(shortUuid: string): Promise<TTelegramProxyApiResult> {
        try {
            const url = this.telegramProxyApiUrlTemplate.replace(
                TELEGRAM_PROXY_SHORT_UUID_PLACEHOLDER,
                encodeURIComponent(shortUuid),
            );
            const response = await this.axiosInstance.get<object>(url);
            const parsedResponse = await TelegramProxyResponseSchema.safeParseAsync(response.data);

            if (!parsedResponse.success) {
                this.logger.error(
                    `Telegram proxy API returned an invalid response: ${JSON.stringify(parsedResponse.error.issues)}`,
                );
                return { status: 'invalid-response' };
            }

            return {
                data: parsedResponse.data,
                status: 'success',
            };
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response?.status) {
                    case 400:
                        this.logger.warn(
                            'Telegram proxy API rejected the request with status 400.',
                        );
                        return { status: 'bad-request' };
                    case 404:
                        this.logger.warn('Telegram proxy API did not find the subscription.');
                        return { status: 'not-found' };
                    default:
                        this.logger.error('Telegram proxy API request failed.', error.message);
                        return { status: 'unavailable' };
                }
            }

            this.logger.error('Telegram proxy API request failed.', error);
            return { status: 'unavailable' };
        }
    }
}
