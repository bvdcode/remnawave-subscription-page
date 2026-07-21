import axios, { AxiosError, AxiosInstance } from 'axios';

import { Injectable, Logger } from '@nestjs/common';

import { TypedConfigService } from '@common/config/app-config';

import { TELEGRAM_PROXY_SHORT_UUID_PLACEHOLDER } from './telegram-proxy.constants';

interface ITelegramProxyLink {
    title: string;
    url: string;
}

interface ITelegramProxyUsage {
    percentage: number | null;
    quotaBytes: number | null;
    usedBytes: number;
}

interface ITelegramProxy {
    displayName: string;
    emoji: string;
    id: string;
    secure: ITelegramProxyLink;
    tls: ITelegramProxyLink;
    usage: ITelegramProxyUsage;
}

interface ITelegramProxyResponse {
    hasAccess: boolean;
    isConfigured: boolean;
    proxies: ITelegramProxy[];
    remnawaveUserUuid: string;
}

export type TTelegramProxyApiResult =
    | { data: ITelegramProxyResponse; status: 'success' }
    | { status: 'bad-request' }
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
            const response = await this.axiosInstance.get<ITelegramProxyResponse>(url);

            return {
                data: response.data,
                status: 'success',
            };
        } catch (error) {
            if (error instanceof AxiosError) {
                switch (error.response?.status) {
                    case 400:
                        return { status: 'bad-request' };
                    case 404:
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
