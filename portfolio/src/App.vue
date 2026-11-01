<script setup>
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'

const { t, locale } = useI18n()

// Meta tags follow the language (index.html has static English defaults for link previews)
useHead({
  title: computed(() => t('meta.title')),
  meta: [
    { name: 'description', content: computed(() => t('meta.description')) },
    { name: 'author', content: computed(() => t('nav.name')) },
    { property: 'og:title', content: computed(() => t('meta.title')) },
    { property: 'og:description', content: computed(() => t('meta.description')) },
    { property: 'og:type', content: 'website' }
  ],
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => locale.value === 'ar' ? 'rtl' : 'ltr')
  }
})
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip text-slate-50">
    <NavBar />
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <SiteFooter />
    <BackToTop />
  </div>
</template>
