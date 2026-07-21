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

export const TelegramProxyWidget = ({ isMobile }: IProps) => {
    const [isLoading, setIsLoading] = useState(false)
    const { currentLang } = useTranslation()
    const subscription = useSubscription()
    const text = TELEGRAM_PROXY_TRANSLATIONS[currentLang]

    const showUnavailableNotification = (message: string) => {
        notifications.show({
            title: text.title,
            message,
            color: 'orange'
        })
    }

    const handleOpenTelegramProxies = async () => {
        vibrate('tap')
        setIsLoading(true)

        try {
            const response = await getTelegramProxies(subscription.user.shortUuid)

            if (!response.hasAccess) {
                showUnavailableNotification(text.noAccess)
                return
            }

            if (!response.isConfigured) {
                showUnavailableNotification(text.notConfigured)
                return
            }

            if (response.proxies.length === 0) {
                showUnavailableNotification(text.empty)
                return
            }

            modals.open({
                centered: true,
                title: text.title,
                children: <TelegramProxyModal proxies={response.proxies} />
            })
        } catch {
            notifications.show({
                title: text.title,
                message: text.loadError,
                color: 'red'
            })
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
