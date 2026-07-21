import { Button, Group, Paper, SimpleGrid, Stack, Text } from '@mantine/core'
import { IconBrandTelegram } from '@tabler/icons-react'

import { TTelegramProxy } from './telegram-proxy.schema'

interface IProps {
    proxies: TTelegramProxy[]
}

const ProxyHeader = ({ displayName, emoji }: Pick<TTelegramProxy, 'displayName' | 'emoji'>) => {
    return (
        <Group gap="xs" wrap="nowrap">
            <Text size="xl">{emoji}</Text>
            <Text fw={600}>{displayName}</Text>
        </Group>
    )
}

export const TelegramProxyModal = ({ proxies }: IProps) => {
    return (
        <Stack gap="sm">
            {proxies.map((proxy) => (
                <Paper key={proxy.id} p="md" radius="md" withBorder>
                    <ProxyHeader displayName={proxy.displayName} emoji={proxy.emoji} />

                    <SimpleGrid cols={{ base: 1, xs: 2 }} mt="sm" spacing="xs">
                        <Button
                            component="a"
                            href={proxy.secure.url}
                            leftSection={<IconBrandTelegram />}
                            radius="md"
                        >
                            {proxy.secure.title}
                        </Button>
                        <Button
                            component="a"
                            href={proxy.tls.url}
                            leftSection={<IconBrandTelegram />}
                            radius="md"
                            variant="light"
                        >
                            {proxy.tls.title}
                        </Button>
                    </SimpleGrid>
                </Paper>
            ))}
        </Stack>
    )
}
