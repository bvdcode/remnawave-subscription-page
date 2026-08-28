import { Response } from 'express';

import { Get, Controller, Header, HttpStatus, Param, Res } from '@nestjs/common';

import { APP_CONFIG_ROUTE_WO_LEADING_PATH } from '@remnawave/subscription-page-types';

import type { IJwtPayload } from '@common/constants';
import { GetJWTPayload } from '@common/decorators/get-jwt-payload';

import { TELEGRAM_PROXY_INTERNAL_API_ROUTE } from './telegram-proxy.constants';
import { TelegramProxyService } from './telegram-proxy.service';
import { WebpageService } from './webpage.service';

@Controller()
export class WebpageController {
    constructor(
        private readonly webpageService: WebpageService,
        private readonly telegramProxyService: TelegramProxyService,
    ) {}

    @Get(APP_CONFIG_ROUTE_WO_LEADING_PATH)
    async getSubscriptionPageConfig(@GetJWTPayload() user: IJwtPayload) {
        return await this.webpageService.getSubscriptionPageConfig(user.su);
    }

    @Get(TELEGRAM_PROXY_INTERNAL_API_ROUTE)
    @Header('Cache-Control', 'no-store')
    async getTelegramProxies(
        @Res() response: Response,
        @Param('shortUuid') shortUuid: string,
    ): Promise<void> {
        const result = await this.telegramProxyService.getTelegramProxies(shortUuid);

        switch (result.status) {
            case 'success':
                response.status(HttpStatus.OK).json(result.data);
                return;
            case 'bad-request':
                response.sendStatus(HttpStatus.BAD_REQUEST);
                return;
            case 'invalid-response':
                response.status(HttpStatus.BAD_GATEWAY).json({ code: 'invalid-response' });
                return;
            case 'not-found':
                response.sendStatus(HttpStatus.NOT_FOUND);
                return;
            case 'unavailable':
                response.sendStatus(HttpStatus.BAD_GATEWAY);
                return;
        }

        const exhaustiveCheck: never = result;
        return exhaustiveCheck;
    }
}
