FROM node:24.17-trixie-slim AS frontend-build
WORKDIR /opt/app

COPY --from=subscription-page-source /frontend/package.json /frontend/package-lock.json ./
RUN npm ci

COPY --from=subscription-page-source /frontend/ ./
RUN npm run start:build

FROM node:24.17-trixie-slim AS backend-build
WORKDIR /opt/app

COPY --from=subscription-page-source /backend/package.json /backend/package-lock.json ./
COPY --from=subscription-page-source /backend/tsconfig.json /backend/tsconfig.build.json ./
RUN npm ci

COPY --from=subscription-page-source /backend/ ./
RUN npm run build
RUN npm cache clean --force
RUN npm prune --omit=dev

FROM node:24.17-trixie-slim
WORKDIR /opt/app

LABEL org.opencontainers.image.title="Remnawave Subscription Page"
LABEL org.opencontainers.image.description="Remnawave Subscription Page"
LABEL org.opencontainers.image.url="https://github.com/bvdcode/remnawave-subscription-page"
LABEL org.opencontainers.image.source="https://github.com/bvdcode/remnawave-subscription-page"
LABEL org.opencontainers.image.vendor="Remnawave"
LABEL org.opencontainers.image.licenses="AGPL-3.0"
LABEL org.opencontainers.image.documentation="https://docs.rw"

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

COPY --from=backend-build /opt/app/dist ./dist
COPY --from=backend-build /opt/app/node_modules ./node_modules
COPY --from=frontend-build /opt/app/dist ./frontend/

COPY --from=subscription-page-source /backend/package.json /backend/package-lock.json ./
COPY --from=subscription-page-source /backend/ecosystem.config.js ./
COPY --from=subscription-page-source /backend/docker-entrypoint.sh ./

ENV PM2_DISABLE_VERSION_CHECK=true
ENV NODE_OPTIONS="--max-old-space-size=16384"

RUN npm install pm2 -g

ENTRYPOINT ["/bin/sh", "docker-entrypoint.sh"]
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
