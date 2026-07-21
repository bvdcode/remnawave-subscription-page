import { z } from 'zod';

const TelegramProxyLinkSchema = z.object({
    title: z.string(),
    url: z
        .string()
        .url()
        .refine((value) => new URL(value).protocol === 'tg:', 'Expected a tg:// URL'),
});

const TelegramProxySchema = z.object({
    id: z.string(),
    displayName: z.string(),
    emoji: z.string(),
    secure: TelegramProxyLinkSchema,
    tls: TelegramProxyLinkSchema,
    usage: z.object({
        usedBytes: z.number().nonnegative(),
        quotaBytes: z.number().nonnegative().nullable(),
        percentage: z.number().nonnegative().nullable(),
    }),
});

export const TelegramProxyResponseSchema = z.object({
    shortUuid: z.string(),
    hasAccess: z.boolean(),
    isConfigured: z.boolean(),
    proxies: z.array(TelegramProxySchema),
});

export type TTelegramProxyResponse = z.infer<typeof TelegramProxyResponseSchema>;
