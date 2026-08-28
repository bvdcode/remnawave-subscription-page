import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { getJWTConfig } from '@common/config/jwt/jwt.config';

import { TelegramProxyService } from './telegram-proxy.service';
import { WebpageController } from './webpage.controller';
import { WebpageService } from './webpage.service';

@Module({
    imports: [JwtModule.registerAsync(getJWTConfig())],
    controllers: [WebpageController],
    providers: [WebpageService, TelegramProxyService],
    exports: [WebpageService],
})
export class WebpageModule {}
