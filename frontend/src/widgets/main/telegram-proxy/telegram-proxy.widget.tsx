import { IconBrandTelegram } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'
import { Button, Center } from '@mantine/core'
import { modals } from '@mantine/modals'
import { useState } from 'react'

import { useSubscription } from '@entities/subscription-info-store'
import { vibrate } from '@shared/utils/vibrate'
import { useTranslation } from '@shared/hooks'

import { TELEGRAM_PROXY_TRANSLATIONS } from './telegram-proxy.translations'
import { TelegramProxyModal } from './telegram-proxy.modal'
import { getTelegramProxies } from './telegram-proxy.api'

interface IProps {
    isMobile: boolean
}

const assertNever = (value: never): never => {
    throw new Error(`Unexpected Telegram proxy API result: ${JSON.stringify(value)}`)
}

export const TelegramProxyWidget = ({ isMobile }: IProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const { currentLang } = useTranslation()
    const subscription = useSubscription()
    const text = TELEGRAM_PROXY_TRANSLATIONS[currentLang]

    const showNotification = (message: string, color: 'orange' | 'red') => {
        notifications.show({
            title: text.title,
            message,
            color
        })
    }

    const handleOpenTelegramProxies = async () => {
        vibrate('tap')
        setIsLoading(true)

        try {
            const result = await getTelegramProxies(subscription.user.shortUuid)

            switch (result.status) {
                case 'bad-request':
                    showNotification(text.badRequest, 'red')
                    return
                case 'invalid-response':
                    showNotification(text.invalidResponse, 'red')
                    return
                case 'not-found':
                    showNotification(text.notFound, 'orange')
                    return
                case 'success': {
                    const response = result.data

                    if (!response.hasAccess) {
                        showNotification(text.noAccess, 'orange')
                        return
                    }

                    if (!response.isConfigured) {
                        showNotification(text.notConfigured, 'orange')
                        return
                    }

                    if (response.proxies.length === 0) {
                        showNotification(text.empty, 'orange')
                        return
                    }

                    modals.open({
                        centered: true,
                        title: text.title,
                        children: <TelegramProxyModal proxies={response.proxies} />
                    })
                    return
                }
                case 'unavailable':
                    showNotification(text.unavailable, 'red')
                    return
                default:
                    assertNever(result)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Center>
            <Button
                fullWidth={isMobile}
                leftSection={<IconBrandTelegram />}
                loading={isLoading}
                onClick={handleOpenTelegramProxies}
                radius="md"
                variant="light"
            >
                {text.button}
            </Button>
        </Center>
    )
}
