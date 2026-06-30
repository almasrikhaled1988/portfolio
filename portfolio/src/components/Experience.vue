<template>
  <section id="experience" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-dark-800 dark:via-dark-900 dark:to-dark-800" />
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-1/4 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        class="text-center mb-16"
      >
        <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
          {{ $t('experience.subtitle') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {{ $t('experience.title') }}
          </span>
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-violet-500 to-primary-500 opacity-30" />

        <!-- Timeline items -->
        <div
          v-for="(item, index) in experiences"
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }"
          :visible="{ opacity: 1, x: 0 }"
          :transition="{ duration: 600, delay: 200 + (index * 150) }"
          :class="[
            'relative flex items-start mb-12 last:mb-0',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          ]"
        >
          <!-- Dot on timeline -->
          <div class="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-6 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 shadow-glow z-10" />

          <!-- Card -->
          <div :class="['w-full pl-12 md:pl-0', index % 2 === 0 ? 'md:w-1/2 md:pr-12' : 'md:w-1/2 md:pl-12']">
            <div class="relative rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <!-- Date badge -->
              <span class="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
                {{ item.period }}
              </span>

              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                {{ item.company }}
              </p>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                {{ item.description }}
              </p>

              <!-- Tech tags -->
              <div v-if="item.tags && item.tags.length" class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in item.tags"
                  :key="tag"
                  class="px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Languages Section -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 400 }"
        class="mt-20 max-w-4xl mx-auto"
      >
        <h3 class="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
          {{ $t('experience.languages') }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          >
            <div class="text-3xl mb-3">{{ lang.flag }}</div>
            <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-1">{{ lang.name }}</h4>
            <p class="text-sm text-primary-600 dark:text-primary-400 font-medium">{{ lang.level }}</p>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800, delay: 600 }"
        class="mt-16 max-w-4xl mx-auto"
      >
        <h3 class="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
          {{ $t('experience.certifications') }}
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span
            v-for="cert in certifications"
            :key="cert"
            class="px-4 py-2 text-sm font-medium rounded-full bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark text-slate-700 dark:text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {{ cert }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const experiences = computed(() => [
  {
    id: 1,
    period: t('experience.items.e1.period'),
    title: t('experience.items.e1.title'),
    company: t('experience.items.e1.company'),
    description: t('experience.items.e1.desc'),
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'AI']
  },
  {
    id: 2,
    period: t('experience.items.e2.period'),
    title: t('experience.items.e2.title'),
    company: t('experience.items.e2.company'),
    description: t('experience.items.e2.desc'),
    tags: ['Mechatronics', 'Automation', 'SPS/TIA Portal']
  },
  {
    id: 3,
    period: t('experience.items.e3.period'),
    title: t('experience.items.e3.title'),
    company: t('experience.items.e3.company'),
    description: t('experience.items.e3.desc'),
    tags: ['Electronics', 'Repair', 'Mobile Devices']
  },
  {
    id: 4,
    period: t('experience.items.e4.period'),
    title: t('experience.items.e4.title'),
    company: t('experience.items.e4.company'),
    description: t('experience.items.e4.desc'),
    tags: ['Electrical', 'Industrial', 'Railway Systems']
  },
  {
    id: 5,
    period: t('experience.items.e5.period'),
    title: t('experience.items.e5.title'),
    company: t('experience.items.e5.company'),
    description: t('experience.items.e5.desc'),
    tags: ['Business', 'Repair', 'Hardware', 'Sales']
  }
])

const languages = computed(() => [
  { name: t('experience.lang.arabic'), level: t('experience.lang.arabicLevel'), flag: '🇸🇾' },
  { name: t('experience.lang.german'), level: t('experience.lang.germanLevel'), flag: '🇦🇹' },
  { name: t('experience.lang.english'), level: t('experience.lang.englishLevel'), flag: '🇬🇧' }
])

const certifications = computed(() => [
  t('experience.certs.ecdl'),
  t('experience.certs.mechatronics'),
  t('experience.certs.sps'),
  t('experience.certs.eplan'),
  t('experience.certs.autocad'),
  t('experience.certs.arduino')
])
</script>
