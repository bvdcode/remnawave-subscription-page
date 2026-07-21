import { TSubscriptionPageLanguageCode } from '@remnawave/subscription-page-types'

interface ITelegramProxyTranslations {
    badRequest: string
    button: string
    empty: string
    invalidResponse: string
    noAccess: string
    notConfigured: string
    notFound: string
    title: string
    unavailable: string
}

export const TELEGRAM_PROXY_TRANSLATIONS = {
    en: {
        button: 'Get Telegram proxy',
        title: 'Telegram proxies',
        noAccess: 'Telegram proxies are not available for this subscription.',
        notConfigured: 'Telegram proxies are not configured yet.',
        empty: 'No Telegram proxies are available.',
        badRequest:
            'The subscription could not be identified. Refresh the page or contact support.',
        notFound: 'The Telegram proxy service could not find this subscription. Contact support.',
        unavailable: 'The Telegram proxy service is temporarily unavailable. Try again later.',
        invalidResponse:
            'The Telegram proxy service returned an invalid response. Notify the administrator.'
    },
    ru: {
        button: 'Получить Telegram-прокси',
        title: 'Telegram-прокси',
        noAccess: 'Telegram-прокси недоступны для этой подписки.',
        notConfigured: 'Telegram-прокси пока не настроены.',
        empty: 'Нет доступных Telegram-прокси.',
        badRequest: 'Не удалось определить подписку. Обновите страницу или обратитесь в поддержку.',
        notFound: 'Сервис Telegram-прокси не нашёл эту подписку. Обратитесь в поддержку.',
        unavailable: 'Сервис Telegram-прокси временно недоступен. Попробуйте позже.',
        invalidResponse:
            'Сервис Telegram-прокси вернул некорректный ответ. Сообщите администратору.'
    },
    zh: {
        button: '获取 Telegram 代理',
        title: 'Telegram 代理',
        noAccess: '此订阅无法使用 Telegram 代理。',
        notConfigured: 'Telegram 代理尚未配置。',
        empty: '暂无可用的 Telegram 代理。',
        badRequest: '无法识别订阅。请刷新页面或联系支持。',
        notFound: 'Telegram 代理服务未找到此订阅。请联系支持。',
        unavailable: 'Telegram 代理服务暂时不可用。请稍后重试。',
        invalidResponse: 'Telegram 代理服务返回了无效响应。请通知管理员。'
    },
    fr: {
        button: 'Obtenir le proxy Telegram',
        title: 'Proxys Telegram',
        noAccess: 'Les proxys Telegram ne sont pas disponibles pour cet abonnement.',
        notConfigured: 'Les proxys Telegram ne sont pas encore configurés.',
        empty: 'Aucun proxy Telegram disponible.',
        badRequest:
            "Impossible d'identifier l'abonnement. Actualisez la page ou contactez le support.",
        notFound:
            "Le service de proxy Telegram n'a pas trouvé cet abonnement. Contactez le support.",
        unavailable:
            'Le service de proxy Telegram est temporairement indisponible. Réessayez plus tard.',
        invalidResponse:
            'Le service de proxy Telegram a renvoyé une réponse invalide. Informez l’administrateur.'
    },
    fa: {
        button: 'دریافت پروکسی تلگرام',
        title: 'پروکسی‌های تلگرام',
        noAccess: 'پروکسی تلگرام برای این اشتراک در دسترس نیست.',
        notConfigured: 'پروکسی‌های تلگرام هنوز پیکربندی نشده‌اند.',
        empty: 'پروکسی تلگرامی در دسترس نیست.',
        badRequest: 'اشتراک شناسایی نشد. صفحه را تازه کنید یا با پشتیبانی تماس بگیرید.',
        notFound: 'سرویس پروکسی تلگرام این اشتراک را پیدا نکرد. با پشتیبانی تماس بگیرید.',
        unavailable: 'سرویس پروکسی تلگرام موقتاً در دسترس نیست. بعداً دوباره تلاش کنید.',
        invalidResponse: 'سرویس پروکسی تلگرام پاسخ نامعتبر برگرداند. به مدیر اطلاع دهید.'
    },
    uz: {
        button: 'Telegram проксисини олиш',
        title: 'Telegram проксилари',
        noAccess: 'Бу обуна учун Telegram проксилари мавжуд эмас.',
        notConfigured: 'Telegram проксилари ҳали созланмаган.',
        empty: 'Telegram проксилари мавжуд эмас.',
        badRequest:
            'Обуна аниқланмади. Саҳифани янгиланг ёки қўллаб-қувватлаш хизматига мурожаат қилинг.',
        notFound:
            'Telegram прокси хизмати бу обунани топмади. Қўллаб-қувватлаш хизматига мурожаат қилинг.',
        unavailable: 'Telegram прокси хизмати вақтинча ишламаяпти. Кейинроқ қайта уриниб кўринг.',
        invalidResponse:
            'Telegram прокси хизмати нотўғри жавоб қайтарди. Администраторга хабар беринг.'
    },
    de: {
        button: 'Telegram-Proxy abrufen',
        title: 'Telegram-Proxys',
        noAccess: 'Telegram-Proxys sind für dieses Abonnement nicht verfügbar.',
        notConfigured: 'Telegram-Proxys sind noch nicht konfiguriert.',
        empty: 'Keine Telegram-Proxys verfügbar.',
        badRequest:
            'Das Abonnement konnte nicht erkannt werden. Lade die Seite neu oder kontaktiere den Support.',
        notFound:
            'Der Telegram-Proxy-Dienst konnte dieses Abonnement nicht finden. Kontaktiere den Support.',
        unavailable:
            'Der Telegram-Proxy-Dienst ist vorübergehend nicht verfügbar. Versuche es später erneut.',
        invalidResponse:
            'Der Telegram-Proxy-Dienst hat eine ungültige Antwort gesendet. Informiere den Administrator.'
    },
    hi: {
        button: 'Telegram प्रॉक्सी प्राप्त करें',
        title: 'Telegram प्रॉक्सी',
        noAccess: 'इस सदस्यता के लिए Telegram प्रॉक्सी उपलब्ध नहीं हैं।',
        notConfigured: 'Telegram प्रॉक्सी अभी कॉन्फ़िगर नहीं हैं।',
        empty: 'कोई Telegram प्रॉक्सी उपलब्ध नहीं है।',
        badRequest: 'सदस्यता की पहचान नहीं हो सकी। पेज रीफ़्रेश करें या सहायता से संपर्क करें।',
        notFound: 'Telegram प्रॉक्सी सेवा को यह सदस्यता नहीं मिली। सहायता से संपर्क करें।',
        unavailable:
            'Telegram प्रॉक्सी सेवा अस्थायी रूप से उपलब्ध नहीं है। बाद में फिर प्रयास करें।',
        invalidResponse: 'Telegram प्रॉक्सी सेवा ने अमान्य उत्तर दिया। व्यवस्थापक को सूचित करें।'
    },
    tr: {
        button: "Telegram proxy'sini al",
        title: 'Telegram proxyleri',
        noAccess: 'Telegram proxyleri bu abonelik için kullanılamıyor.',
        notConfigured: 'Telegram proxyleri henüz yapılandırılmadı.',
        empty: 'Kullanılabilir Telegram proxy bulunamadı.',
        badRequest: 'Abonelik belirlenemedi. Sayfayı yenileyin veya destekle iletişime geçin.',
        notFound: 'Telegram proxy hizmeti bu aboneliği bulamadı. Destekle iletişime geçin.',
        unavailable:
            'Telegram proxy hizmeti geçici olarak kullanılamıyor. Daha sonra tekrar deneyin.',
        invalidResponse: 'Telegram proxy hizmeti geçersiz bir yanıt döndürdü. Yöneticiye bildirin.'
    },
    az: {
        button: 'Telegram proksisini əldə et',
        title: 'Telegram proksiləri',
        noAccess: 'Telegram proksiləri bu abunəlik üçün əlçatan deyil.',
        notConfigured: 'Telegram proksiləri hələ konfiqurasiya edilməyib.',
        empty: 'Əlçatan Telegram proksisi yoxdur.',
        badRequest:
            'Abunəliyi müəyyən etmək mümkün olmadı. Səhifəni yeniləyin və ya dəstəklə əlaqə saxlayın.',
        notFound: 'Telegram proksi xidməti bu abunəliyi tapmadı. Dəstəklə əlaqə saxlayın.',
        unavailable:
            'Telegram proksi xidməti müvəqqəti olaraq əlçatan deyil. Daha sonra yenidən cəhd edin.',
        invalidResponse:
            'Telegram proksi xidməti etibarsız cavab qaytardı. Administratora bildirin.'
    },
    es: {
        button: 'Obtener proxy de Telegram',
        title: 'Proxies de Telegram',
        noAccess: 'Los proxies de Telegram no están disponibles para esta suscripción.',
        notConfigured: 'Los proxies de Telegram aún no están configurados.',
        empty: 'No hay proxies de Telegram disponibles.',
        badRequest:
            'No se pudo identificar la suscripción. Actualiza la página o contacta con soporte.',
        notFound:
            'El servicio de proxy de Telegram no encontró esta suscripción. Contacta con soporte.',
        unavailable:
            'El servicio de proxy de Telegram no está disponible temporalmente. Inténtalo más tarde.',
        invalidResponse:
            'El servicio de proxy de Telegram devolvió una respuesta no válida. Avisa al administrador.'
    },
    vi: {
        button: 'Nhận proxy Telegram',
        title: 'Proxy Telegram',
        noAccess: 'Proxy Telegram không khả dụng cho gói đăng ký này.',
        notConfigured: 'Proxy Telegram chưa được cấu hình.',
        empty: 'Không có proxy Telegram nào khả dụng.',
        badRequest: 'Không thể xác định gói đăng ký. Hãy tải lại trang hoặc liên hệ hỗ trợ.',
        notFound: 'Dịch vụ proxy Telegram không tìm thấy gói đăng ký này. Hãy liên hệ hỗ trợ.',
        unavailable: 'Dịch vụ proxy Telegram tạm thời không khả dụng. Vui lòng thử lại sau.',
        invalidResponse:
            'Dịch vụ proxy Telegram trả về phản hồi không hợp lệ. Hãy báo cho quản trị viên.'
    },
    ja: {
        button: 'Telegramプロキシを取得',
        title: 'Telegramプロキシ',
        noAccess: 'このサブスクリプションではTelegramプロキシを利用できません。',
        notConfigured: 'Telegramプロキシはまだ設定されていません。',
        empty: '利用可能なTelegramプロキシがありません。',
        badRequest:
            'サブスクリプションを識別できませんでした。ページを更新するか、サポートにお問い合わせください。',
        notFound:
            'Telegramプロキシサービスでこのサブスクリプションが見つかりません。サポートにお問い合わせください。',
        unavailable:
            'Telegramプロキシサービスは一時的に利用できません。後でもう一度お試しください。',
        invalidResponse:
            'Telegramプロキシサービスから無効な応答が返されました。管理者にお知らせください。'
    },
    be: {
        button: 'Атрымаць Telegram-проксі',
        title: 'Telegram-проксі',
        noAccess: 'Telegram-проксі недаступныя для гэтай падпіскі.',
        notConfigured: 'Telegram-проксі пакуль не настроены.',
        empty: 'Няма даступных Telegram-проксі.',
        badRequest: 'Не ўдалося вызначыць падпіску. Абнавіце старонку або звярніцеся ў падтрымку.',
        notFound: 'Сэрвіс Telegram-проксі не знайшоў гэтую падпіску. Звярніцеся ў падтрымку.',
        unavailable: 'Сэрвіс Telegram-проксі часова недаступны. Паспрабуйце пазней.',
        invalidResponse:
            'Сэрвіс Telegram-проксі вярнуў некарэктны адказ. Паведаміце адміністратару.'
    },
    uk: {
        button: 'Отримати Telegram-проксі',
        title: 'Telegram-проксі',
        noAccess: 'Telegram-проксі недоступні для цієї підписки.',
        notConfigured: 'Telegram-проксі ще не налаштовані.',
        empty: 'Немає доступних Telegram-проксі.',
        badRequest: 'Не вдалося визначити підписку. Оновіть сторінку або зверніться до підтримки.',
        notFound: 'Сервіс Telegram-проксі не знайшов цю підписку. Зверніться до підтримки.',
        unavailable: 'Сервіс Telegram-проксі тимчасово недоступний. Спробуйте пізніше.',
        invalidResponse:
            'Сервіс Telegram-проксі повернув некоректну відповідь. Повідомте адміністратора.'
    },
    pt: {
        button: 'Obter proxy do Telegram',
        title: 'Proxies do Telegram',
        noAccess: 'Os proxies do Telegram não estão disponíveis para esta assinatura.',
        notConfigured: 'Os proxies do Telegram ainda não estão configurados.',
        empty: 'Nenhum proxy do Telegram disponível.',
        badRequest:
            'Não foi possível identificar a assinatura. Atualize a página ou contate o suporte.',
        notFound:
            'O serviço de proxy do Telegram não encontrou esta assinatura. Contate o suporte.',
        unavailable:
            'O serviço de proxy do Telegram está temporariamente indisponível. Tente novamente mais tarde.',
        invalidResponse:
            'O serviço de proxy do Telegram retornou uma resposta inválida. Avise o administrador.'
    },
    pl: {
        button: 'Pobierz proxy Telegrama',
        title: 'Proxy Telegrama',
        noAccess: 'Proxy Telegrama nie są dostępne dla tej subskrypcji.',
        notConfigured: 'Proxy Telegrama nie zostały jeszcze skonfigurowane.',
        empty: 'Brak dostępnych proxy Telegrama.',
        badRequest:
            'Nie udało się rozpoznać subskrypcji. Odśwież stronę lub skontaktuj się ze wsparciem.',
        notFound:
            'Usługa proxy Telegrama nie znalazła tej subskrypcji. Skontaktuj się ze wsparciem.',
        unavailable:
            'Usługa proxy Telegrama jest tymczasowo niedostępna. Spróbuj ponownie później.',
        invalidResponse:
            'Usługa proxy Telegrama zwróciła nieprawidłową odpowiedź. Powiadom administratora.'
    },
    id: {
        button: 'Dapatkan proxy Telegram',
        title: 'Proxy Telegram',
        noAccess: 'Proxy Telegram tidak tersedia untuk langganan ini.',
        notConfigured: 'Proxy Telegram belum dikonfigurasi.',
        empty: 'Tidak ada proxy Telegram yang tersedia.',
        badRequest: 'Langganan tidak dapat dikenali. Muat ulang halaman atau hubungi dukungan.',
        notFound: 'Layanan proxy Telegram tidak menemukan langganan ini. Hubungi dukungan.',
        unavailable: 'Layanan proxy Telegram sementara tidak tersedia. Coba lagi nanti.',
        invalidResponse:
            'Layanan proxy Telegram memberikan respons yang tidak valid. Beri tahu administrator.'
    },
    tk: {
        button: 'Telegram proksisini al',
        title: 'Telegram proksileri',
        noAccess: 'Telegram proksileri bu abuna üçin elýeterli däl.',
        notConfigured: 'Telegram proksileri entek sazlanmady.',
        empty: 'Elýeterli Telegram proksisi ýok.',
        badRequest: 'Abunany kesgitläp bolmady. Sahypany täzeläň ýa-da goldaw bilen habarlaşyň.',
        notFound: 'Telegram proksi hyzmaty bu abunany tapmady. Goldaw bilen habarlaşyň.',
        unavailable: 'Telegram proksi hyzmaty wagtlaýyn elýeterli däl. Soňrak gaýtadan synanyşyň.',
        invalidResponse:
            'Telegram proksi hyzmaty nädogry jogap gaýtardy. Administratora habar beriň.'
    },
    th: {
        button: 'รับพร็อกซี Telegram',
        title: 'พร็อกซี Telegram',
        noAccess: 'พร็อกซี Telegram ไม่พร้อมใช้งานสำหรับการสมัครสมาชิกนี้',
        notConfigured: 'ยังไม่ได้กำหนดค่าพร็อกซี Telegram',
        empty: 'ไม่มีพร็อกซี Telegram ที่พร้อมใช้งาน',
        badRequest: 'ไม่สามารถระบุการสมัครสมาชิกได้ โปรดรีเฟรชหน้าหรือติดต่อฝ่ายสนับสนุน',
        notFound: 'บริการพร็อกซี Telegram ไม่พบการสมัครสมาชิกนี้ โปรดติดต่อฝ่ายสนับสนุน',
        unavailable: 'บริการพร็อกซี Telegram ไม่พร้อมใช้งานชั่วคราว โปรดลองอีกครั้งในภายหลัง',
        invalidResponse: 'บริการพร็อกซี Telegram ส่งคืนการตอบกลับที่ไม่ถูกต้อง โปรดแจ้งผู้ดูแลระบบ'
    }
} satisfies Record<TSubscriptionPageLanguageCode, ITelegramProxyTranslations>
