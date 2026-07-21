import { createZodDto } from 'nestjs-zod';
import proxyaddr from 'proxy-addr';
import { z } from 'zod';

const booleanString = (def: 'true' | 'false' = 'false') =>
    z
        .string()
        .default(def)
        .transform((val) => (val === '' ? def : val))
        .refine((val) => val === 'true' || val === 'false', 'Must be "true" or "false".')
        .transform((val) => val === 'true')
        .pipe(z.boolean());

const TRUST_PROXY_DEFAULT = '1';

const optionalUrl = (name: string, allowedProtocols: string[]) =>
    z
        .string()
        .trim()
        .default('')
        .refine(
            (value) => {
                if (value === '') return true;
                if (!z.string().url().safeParse(value).success) return false;

                return allowedProtocols.includes(new URL(value).protocol);
            },
            `${name} must be a valid URL using one of these protocols: ${allowedProtocols.join(', ')}`,
        )
        .transform((value) => (value === '' ? undefined : value));

const isTrustProxy = (val: string): boolean => {
    if (val === 'true' || val === 'false' || /^\d+$/.test(val)) return true;

    try {
        proxyaddr.compile(val.split(',').map((entry) => entry.trim()));
        return true;
    } catch {
        return false;
    }
};

const REQUIRED_REMNAWAVE_API_TOKEN_MESSAGE =
    'Remnawave Dashboard → Remnawave Settings → API Tokens. Create a new API Token and set it in the .env file.';

export const configSchema = z
    .object({
        APP_PORT: z
            .string()
            .default('3010')
            .transform((port) => parseInt(port, 10)),
        REMNAWAVE_PANEL_URL: z.string(),
        REMNAWAVE_API_TOKEN: z
            .string({ message: REQUIRED_REMNAWAVE_API_TOKEN_MESSAGE })
            .min(1, REQUIRED_REMNAWAVE_API_TOKEN_MESSAGE),

        SUBPAGE_CONFIG_UUID: z.string().default('00000000-0000-0000-0000-000000000000'),
        CUSTOM_SUB_PREFIX: z.optional(z.string()),
        ROOT_REDIRECT_TO: optionalUrl('ROOT_REDIRECT_TO', ['http:', 'https:']),
        TELEGRAM_PROXY_API_URL: z
            .string()
            .trim()
            .url()
            .refine(
                (value) => ['http:', 'https:'].includes(new URL(value).protocol),
                'TELEGRAM_PROXY_API_URL must use http: or https:',
            )
            .refine(
                (value) => value.split('{shortUuid}').length === 2,
                'TELEGRAM_PROXY_API_URL must contain exactly one {shortUuid} placeholder',
            ),

        TRUST_PROXY: z
            .string()
            .default(TRUST_PROXY_DEFAULT)
            .transform((val) => (val.trim() === '' ? TRUST_PROXY_DEFAULT : val.trim()))
            .refine(
                isTrustProxy,
                'TRUST_PROXY must be "true"/"false", a non-negative integer (number of trusted ' +
                    'reverse-proxy hops), or a comma-separated list of preset names ' +
                    '(loopback, linklocal, uniquelocal) and/or IP addresses / CIDR subnets.',
            )
            .transform((val): boolean | number | string => {
                if (val === 'true') return true;
                if (val === 'false') return false;
                if (/^\d+$/.test(val)) return Number(val);
                return val;
            }),

        CADDY_AUTH_API_TOKEN: z.optional(z.string()),
        CLOUDFLARE_ZERO_TRUST_CLIENT_ID: z.optional(z.string()),
        CLOUDFLARE_ZERO_TRUST_CLIENT_SECRET: z.optional(z.string()),

        MARZBAN_LEGACY_LINK_ENABLED: booleanString(),
        MARZBAN_LEGACY_SECRET_KEY: z.optional(z.string()),
        MARZBAN_LEGACY_SUBSCRIPTION_VALID_FROM: z.optional(z.string()),
        MARZBAN_LEGACY_DROP_REVOKED_SUBSCRIPTIONS: booleanString(),
        INTERNAL_JWT_SECRET: z.string(),
        EGAMES_COOKIE: z.optional(z.string()),
    })
    .superRefine((data, ctx) => {
        if (
            !data.REMNAWAVE_PANEL_URL.startsWith('http://') &&
            !data.REMNAWAVE_PANEL_URL.startsWith('https://')
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'REMNAWAVE_PANEL_URL must start with http:// or https://',
                path: ['REMNAWAVE_PANEL_URL'],
            });
        }
        if (data.MARZBAN_LEGACY_LINK_ENABLED) {
            if (!data.MARZBAN_LEGACY_SECRET_KEY) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message:
                        'MARZBAN_LEGACY_SECRET_KEY is required when MARZBAN_LEGACY_LINK_ENABLED is true',
                });
            }
        }
    });

export type ConfigSchema = z.infer<typeof configSchema>;
export class Env extends createZodDto(configSchema) {}
