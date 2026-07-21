import { TSubscriptionPageLanguageCode } from '@remnawave/subscription-page-types'

interface ITelegramProxyTranslations {
    button: string
    empty: string
    loadError: string
    noAccess: string
    notConfigured: string
    title: string
}

export const TELEGRAM_PROXY_TRANSLATIONS = {
    en: {
        button: 'Get Telegram proxy',
        title: 'Telegram proxies',
        noAccess: 'Telegram proxies are not available for this subscription.',
        notConfigured: 'Telegram proxies are not configured yet.',
        empty: 'No Telegram proxies are available.',
        loadError: 'Failed to load Telegram proxies. Please try again later.'
    },
    ru: {
        button: 'Получить Telegram-прокси',
        title: 'Telegram-прокси',
        noAccess: 'Telegram-прокси недоступны для этой подписки.',
        notConfigured: 'Telegram-прокси пока не настроены.',
        empty: 'Нет доступных Telegram-прокси.',
        loadError: 'Не удалось загрузить Telegram-прокси. Попробуйте позже.'
    },
    zh: {
        button: '获取 Telegram 代理',
        title: 'Telegram 代理',
        noAccess: '此订阅无法使用 Telegram 代理。',
        notConfigured: 'Telegram 代理尚未配置。',
        empty: '暂无可用的 Telegram 代理。',
        loadError: '无法加载 Telegram 代理，请稍后重试。'
    },
    fr: {
        button: 'Obtenir le proxy Telegram',
        title: 'Proxys Telegram',
        noAccess: 'Les proxys Telegram ne sont pas disponibles pour cet abonnement.',
        notConfigured: 'Les proxys Telegram ne sont pas encore configurés.',
        empty: 'Aucun proxy Telegram disponible.',
        loadError: 'Impossible de charger les proxys Telegram. Réessayez plus tard.'
    },
    fa: {
        button: 'دریافت پروکسی تلگرام',
        title: 'پروکسی‌های تلگرام',
        noAccess: 'پروکسی تلگرام برای این اشتراک در دسترس نیست.',
        notConfigured: 'پروکسی‌های تلگرام هنوز پیکربندی نشده‌اند.',
        empty: 'پروکسی تلگرامی در دسترس نیست.',
        loadError: 'بارگیری پروکسی‌های تلگرام انجام نشد. بعداً دوباره تلاش کنید.'
    },
    uz: {
        button: 'Telegram проксисини олиш',
        title: 'Telegram проксилари',
        noAccess: 'Бу обуна учун Telegram проксилари мавжуд эмас.',
        notConfigured: 'Telegram проксилари ҳали созланмаган.',
        empty: 'Telegram проксилари мавжуд эмас.',
        loadError: 'Telegram проксиларини юклаб бўлмади. Кейинроқ қайта уриниб кўринг.'
    },
    de: {
        button: 'Telegram-Proxy abrufen',
        title: 'Telegram-Proxys',
        noAccess: 'Telegram-Proxys sind für dieses Abonnement nicht verfügbar.',
        notConfigured: 'Telegram-Proxys sind noch nicht konfiguriert.',
        empty: 'Keine Telegram-Proxys verfügbar.',
        loadError: 'Telegram-Proxys konnten nicht geladen werden. Versuche es später erneut.'
    },
    hi: {
        button: 'Telegram प्रॉक्सी प्राप्त करें',
        title: 'Telegram प्रॉक्सी',
        noAccess: 'इस सदस्यता के लिए Telegram प्रॉक्सी उपलब्ध नहीं हैं।',
        notConfigured: 'Telegram प्रॉक्सी अभी कॉन्फ़िगर नहीं हैं।',
        empty: 'कोई Telegram प्रॉक्सी उपलब्ध नहीं है।',
        loadError: 'Telegram प्रॉक्सी लोड नहीं हो सके। बाद में फिर प्रयास करें।'
    },
    tr: {
        button: "Telegram proxy'sini al",
        title: 'Telegram proxyleri',
        noAccess: 'Telegram proxyleri bu abonelik için kullanılamıyor.',
        notConfigured: 'Telegram proxyleri henüz yapılandırılmadı.',
        empty: 'Kullanılabilir Telegram proxy bulunamadı.',
        loadError: 'Telegram proxyleri yüklenemedi. Lütfen daha sonra tekrar deneyin.'
    },
    az: {
        button: 'Telegram proksisini əldə et',
        title: 'Telegram proksiləri',
        noAccess: 'Telegram proksiləri bu abunəlik üçün əlçatan deyil.',
        notConfigured: 'Telegram proksiləri hələ konfiqurasiya edilməyib.',
        empty: 'Əlçatan Telegram proksisi yoxdur.',
        loadError: 'Telegram proksilərini yükləmək alınmadı. Daha sonra yenidən cəhd edin.'
    },
    es: {
        button: 'Obtener proxy de Telegram',
        title: 'Proxies de Telegram',
        noAccess: 'Los proxies de Telegram no están disponibles para esta suscripción.',
        notConfigured: 'Los proxies de Telegram aún no están configurados.',
        empty: 'No hay proxies de Telegram disponibles.',
        loadError: 'No se pudieron cargar los proxies de Telegram. Inténtalo más tarde.'
    },
    vi: {
        button: 'Nhận proxy Telegram',
        title: 'Proxy Telegram',
        noAccess: 'Proxy Telegram không khả dụng cho gói đăng ký này.',
        notConfigured: 'Proxy Telegram chưa được cấu hình.',
        empty: 'Không có proxy Telegram nào khả dụng.',
        loadError: 'Không thể tải proxy Telegram. Vui lòng thử lại sau.'
    },
    ja: {
        button: 'Telegramプロキシを取得',
        title: 'Telegramプロキシ',
        noAccess: 'このサブスクリプションではTelegramプロキシを利用できません。',
        notConfigured: 'Telegramプロキシはまだ設定されていません。',
        empty: '利用可能なTelegramプロキシがありません。',
        loadError: 'Telegramプロキシを読み込めませんでした。後でもう一度お試しください。'
    },
    be: {
        button: 'Атрымаць Telegram-проксі',
        title: 'Telegram-проксі',
        noAccess: 'Telegram-проксі недаступныя для гэтай падпіскі.',
        notConfigured: 'Telegram-проксі пакуль не настроены.',
        empty: 'Няма даступных Telegram-проксі.',
        loadError: 'Не ўдалося загрузіць Telegram-проксі. Паспрабуйце пазней.'
    },
    uk: {
        button: 'Отримати Telegram-проксі',
        title: 'Telegram-проксі',
        noAccess: 'Telegram-проксі недоступні для цієї підписки.',
        notConfigured: 'Telegram-проксі ще не налаштовані.',
        empty: 'Немає доступних Telegram-проксі.',
        loadError: 'Не вдалося завантажити Telegram-проксі. Спробуйте пізніше.'
    },
    pt: {
        button: 'Obter proxy do Telegram',
        title: 'Proxies do Telegram',
        noAccess: 'Os proxies do Telegram não estão disponíveis para esta assinatura.',
        notConfigured: 'Os proxies do Telegram ainda não estão configurados.',
        empty: 'Nenhum proxy do Telegram disponível.',
        loadError: 'Não foi possível carregar os proxies do Telegram. Tente novamente mais tarde.'
    },
    pl: {
        button: 'Pobierz proxy Telegrama',
        title: 'Proxy Telegrama',
        noAccess: 'Proxy Telegrama nie są dostępne dla tej subskrypcji.',
        notConfigured: 'Proxy Telegrama nie zostały jeszcze skonfigurowane.',
        empty: 'Brak dostępnych proxy Telegrama.',
        loadError: 'Nie udało się wczytać proxy Telegrama. Spróbuj ponownie później.'
    },
    id: {
        button: 'Dapatkan proxy Telegram',
        title: 'Proxy Telegram',
        noAccess: 'Proxy Telegram tidak tersedia untuk langganan ini.',
        notConfigured: 'Proxy Telegram belum dikonfigurasi.',
        empty: 'Tidak ada proxy Telegram yang tersedia.',
        loadError: 'Gagal memuat proxy Telegram. Silakan coba lagi nanti.'
    },
    tk: {
        button: 'Telegram proksisini al',
        title: 'Telegram proksileri',
        noAccess: 'Telegram proksileri bu abuna üçin elýeterli däl.',
        notConfigured: 'Telegram proksileri entek sazlanmady.',
        empty: 'Elýeterli Telegram proksisi ýok.',
        loadError: 'Telegram proksilerini ýükläp bolmady. Soňrak gaýtadan synanyşyň.'
    },
    th: {
        button: 'รับพร็อกซี Telegram',
        title: 'พร็อกซี Telegram',
        noAccess: 'พร็อกซี Telegram ไม่พร้อมใช้งานสำหรับการสมัครสมาชิกนี้',
        notConfigured: 'ยังไม่ได้กำหนดค่าพร็อกซี Telegram',
        empty: 'ไม่มีพร็อกซี Telegram ที่พร้อมใช้งาน',
        loadError: 'โหลดพร็อกซี Telegram ไม่สำเร็จ โปรดลองอีกครั้งในภายหลัง'
    }
} satisfies Record<TSubscriptionPageLanguageCode, ITelegramProxyTranslations>
