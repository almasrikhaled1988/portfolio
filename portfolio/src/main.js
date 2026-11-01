import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import i18n from './i18n'

// Self-hosted fonts: Inter (text), IBM Plex Sans Arabic (Arabic)
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
import '@fontsource/ibm-plex-sans-arabic/600.css'
import '@fontsource/ibm-plex-sans-arabic/700.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(createHead())

// Visitors who ask their system for less motion get the page without entrance animations:
// a no-op "motion" directive leaves every v-motion element in its normal, visible state.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  app.directive('motion', {})
} else {
  app.use(MotionPlugin)
}

app.use(i18n)
app.mount('#app')
