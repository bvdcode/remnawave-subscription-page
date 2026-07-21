import { Request, Response } from 'express';

import { Get, Controller, Res, Req, Param, Logger, Header, HttpStatus } from '@nestjs/common';

import {
    REQUEST_TEMPLATE_TYPE_VALUES,
    TRequestTemplateTypeKeys,
} from '@remnawave/backend-contract';
import { APP_CONFIG_ROUTE_WO_LEADING_PATH } from '@remnawave/subscription-page-types';

import { GetJWTPayload } from '@common/decorators/get-jwt-payload';
import { ClientIp } from '@common/decorators/get-ip';
import { IJwtPayload } from '@common/constants';

import { TELEGRAM_PROXY_INTERNAL_API_ROUTE } from './telegram-proxy.constants';
import { SubpageConfigService } from './subpage-config.service';
import { TelegramProxyService } from './telegram-proxy.service';
import { RootService } from './root.service';

@Controller()
export class RootController {
    private readonly logger = new Logger(RootController.name);

    constructor(
        private readonly rootService: RootService,
        private readonly subpageConfigService: SubpageConfigService,
        private readonly telegramProxyService: TelegramProxyService,
    ) {}

    @Get(APP_CONFIG_ROUTE_WO_LEADING_PATH)
    async getSubscriptionPageConfig(@GetJWTPayload() user: IJwtPayload, @Req() request: Request) {
        return await this.subpageConfigService.getSubscriptionPageConfig(user.su, request);
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

    @Get([':shortUuid', ':shortUuid/:clientType'])
    async root(
        @ClientIp() clientIp: string,
        @Req() request: Request,
        @Res() response: Response,
        @Param('shortUuid') shortUuid: string,
        @Param('clientType') clientType: string,
    ) {
        if (request.path.startsWith('/assets') || request.path.startsWith('/locales')) {
            response.socket?.destroy();
            return;
        }

        if (clientType === undefined) {
            return await this.rootService.serveSubscriptionPage(
                clientIp,
                request,
                response,
                shortUuid,
            );
        }

        if (!REQUEST_TEMPLATE_TYPE_VALUES.includes(clientType as TRequestTemplateTypeKeys)) {
            this.logger.error(`Invalid client type: ${clientType}`);

            response.socket?.destroy();
            return;
        } else {
            return await this.rootService.serveSubscriptionPage(
                clientIp,
                request,
                response,
                shortUuid,
                clientType as TRequestTemplateTypeKeys,
            );
        }
    }
}
