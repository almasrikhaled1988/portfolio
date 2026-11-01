import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'
import de from './locales/de.json'

const SUPPORTED_LOCALES = ['en', 'de', 'ar']

// Start in the language the visitor chose before; otherwise use their browser language (e.g. German in Austria)
function getInitialLocale() {
    try {
        const saved = localStorage.getItem('user-locale')
        if (SUPPORTED_LOCALES.includes(saved)) return saved
    } catch (e) {
        // localStorage can be blocked (private mode, strict privacy settings)
    }

    const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language]
    for (const language of browserLanguages) {
        const code = (language || '').slice(0, 2).toLowerCase()
        if (SUPPORTED_LOCALES.includes(code)) return code
    }
    return 'en'
}

const i18n = createI18n({
    legacy: false, // Set to false to use Composition API
    locale: getInitialLocale(),
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        ar,
        de
    }
})

export default i18n
