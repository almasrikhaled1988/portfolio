import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'
import de from './locales/de.json'

const i18n = createI18n({
    legacy: false, // Set to false to use Composition API
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        en,
        ar,
        de
    }
})

export default i18n
