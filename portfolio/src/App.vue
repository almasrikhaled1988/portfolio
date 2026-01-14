<script setup>
import { useHead } from '@vueuse/head'
import { useDark, useToggle } from '@vueuse/core'
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const { t, locale } = useI18n()

// Setup dark mode
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)

// Setup meta tags reactively
useHead({
  title: computed(() => `${t('nav.name')} - ${t('nav.projects')}`),
  meta: [
    { name: 'description', content: computed(() => t('hero.subtitle')) },
    { name: 'keywords', content: 'software developer, web development, portfolio, projects' },
    { name: 'author', content: computed(() => t('nav.name')) },
    { property: 'og:title', content: computed(() => `${t('nav.name')} - ${t('nav.projects')}`) },
    { property: 'og:description', content: computed(() => t('hero.subtitle')) },
    { property: 'og:type', content: 'website' }
  ],
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
  }
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <NavBar />
    <main class="pt-16">
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>
