import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { MotionPlugin } from '@vueuse/motion'
import './style.css'
import App from './App.vue'

// Ensure dark mode is properly initialized
if (localStorage.getItem('vueuse-color-scheme') === null) {
  localStorage.setItem(
    'vueuse-color-scheme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )
}

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(MotionPlugin)

app.mount('#app')
