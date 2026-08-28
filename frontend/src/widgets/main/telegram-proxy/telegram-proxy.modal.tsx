import { Button, Paper, Stack } from '@mantine/core'
import { IconBrandTelegram } from '@tabler/icons-react'

import { TTelegramProxy } from './telegram-proxy.schema'

interface IProps {
    proxies: TTelegramProxy[]
}

export const TelegramProxyModal = ({ proxies }: IProps) => {
    return (
        <Stack gap="sm">
            {proxies.map((proxy) => (
                <Paper key={proxy.id} p="md" radius="md" withBorder>
                    <Button
                        component="a"
                        fullWidth
                        href={proxy.tls.url}
                        leftSection={<IconBrandTelegram />}
                        radius="md"
                    >
                        {proxy.emoji} {proxy.displayName}
                    </Button>
                </Paper>
            ))}
        </Stack>
    )
}
