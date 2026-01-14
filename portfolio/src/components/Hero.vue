<template>
  <section id="home" class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div 
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200"
        class="space-y-8"
      >
        <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white">
          {{ $t('hero.greeting') }} <span 
            class="text-primary-600 dark:text-primary-400 animate-bounce-subtle inline-block"
          >{{ $t('hero.name') }}</span>
        </h1>
        <p 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1 }"
          :delay="700"
          class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
        >
          {{ $t('hero.subtitle') }}
        </p>
        <div 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="1000"
          class="space-x-4 space-y-4 sm:space-y-0 rtl:space-x-reverse"
        >
          <a 
            href="#projects" 
            class="inline-block px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-200"
          >
            {{ $t('hero.viewWork') }}
          </a>
          <a 
            href="#contact" 
            class="inline-block px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-200"
          >
            {{ $t('hero.getInTouch') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';
</script>
