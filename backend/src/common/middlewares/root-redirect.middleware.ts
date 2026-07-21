import { RequestHandler } from 'express';

import { HttpStatus } from '@nestjs/common';

export const createRootRedirectMiddleware = (redirectTo?: string): RequestHandler => {
    return (request, response, next): void => {
        if (request.method === 'GET' && request.path === '/' && redirectTo) {
            response.redirect(HttpStatus.FOUND, redirectTo);
            return;
        }

        next();
    };
};
