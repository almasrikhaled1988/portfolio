<script setup>
import { useHead } from '@vueuse/head'
import { useDark, useToggle } from '@vueuse/core'
import { watch } from 'vue'
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

// Setup dark mode
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: '',
})
const toggleDark = useToggle(isDark)

// Setup meta tags
useHead({
  title: 'Your Name - Portfolio',
  meta: [
    { name: 'description', content: 'Professional portfolio showcasing my software development projects and skills' },
    { name: 'keywords', content: 'software developer, web development, portfolio, projects' },
    { name: 'author', content: 'Your Name' },
    { property: 'og:title', content: 'Your Name - Portfolio' },
    { property: 'og:description', content: 'Professional portfolio showcasing my software development projects and skills' },
    { property: 'og:type', content: 'website' }
  ],
  htmlAttrs: {
    lang: 'en'
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
