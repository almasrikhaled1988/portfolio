<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 dark:from-dark-900/50 dark:via-dark-800 dark:to-dark-900/50" />
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-violet-500/5 rounded-full blur-3xl" />
    
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
          {{ $t('about.subtitle') || 'Get to know me' }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {{ $t('about.title') }}
          </span>
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <!-- Left: Content -->
        <div class="space-y-8 rtl:text-right">
          <!-- Bio Cards -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            :transition="{ duration: 800, delay: 200 }"
            class="space-y-6"
          >
            <!-- Bio paragraphs as glass cards -->
            <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
              <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ $t('about.description1') }}
              </p>
            </div>
            
            <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
              <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ $t('about.description2') }}
              </p>
            </div>
            
            <div class="p-6 rounded-2xl bg-gradient-to-br from-primary-500/5 to-violet-500/5 dark:from-primary-500/10 dark:to-violet-500/10 backdrop-blur-md border border-primary-200/30 dark:border-primary-500/20 shadow-glass dark:shadow-glass-dark">
              <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ $t('about.description3') }}
              </p>
            </div>
          </div>

          <!-- Education Timeline -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 400 }"
          >
            <h3 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3 rtl:flex-row-reverse">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-white">
                <AcademicCapIcon class="w-5 h-5" />
              </span>
              {{ $t('about.educationTitle') }}
            </h3>
            
            <div class="relative space-y-6">
              <!-- Timeline line -->
              <div class="absolute top-4 left-5 rtl:left-auto rtl:right-5 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-primary-500/50 to-violet-500/30 rounded-full" />
              
              <!-- Timeline items -->
              <div 
                v-for="(edu, index) in educationItems" 
                :key="index"
                v-motion
                :initial="{ opacity: 0, x: -20 }"
                :visible="{ opacity: 1, x: 0 }"
                :transition="{ duration: 600, delay: 500 + (index * 150) }"
                class="relative pl-14 rtl:pl-0 rtl:pr-14"
              >
                <!-- Timeline dot -->
                <div 
                  class="absolute left-3 rtl:left-auto rtl:right-3 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-dark-800"
                  :class="index === 0 ? 'bg-primary-500' : 'bg-slate-300 dark:bg-slate-600'"
                />
                
                <!-- Content card -->
                <div class="p-5 rounded-xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-dark-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass dark:hover:shadow-glass-dark">
                  <h4 class="font-semibold text-slate-900 dark:text-white mb-1">
                    {{ $t(edu.title) }}
                  </h4>
                  <p v-if="edu.sub" class="text-sm text-primary-600 dark:text-primary-400 mb-2">
                    {{ $t(edu.sub) }}
                  </p>
                  <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {{ $t(edu.desc) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Photo -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800, delay: 300 }"
          class="lg:sticky lg:top-24"
        >
          <div class="relative">
            <!-- Decorative elements -->
            <div class="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-primary-500/20 to-violet-500/20 blur-xl" />
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            
            <!-- Photo container with glass effect -->
            <div class="relative rounded-3xl overflow-hidden bg-white/40 dark:bg-dark-800/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark p-3">
              <div class="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="../assets/DSC04177_CV.jpg"
                  :alt="$t('about.photoAlt') || 'Professional photo'"
                  class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                >
              </div>
              
              <!-- Photo caption -->
              <div class="mt-4 px-2 pb-1">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-semibold text-slate-900 dark:text-white">{{ $t('nav.name') }}</p>
                    <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('hero.subtitle') }}</p>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                    <div class="w-2 h-2 rounded-full bg-violet-500 animate-pulse" style="animation-delay: 0.2s;" />
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style="animation-delay: 0.4s;" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AcademicCapIcon } from '@heroicons/vue/24/outline'

const educationItems = [
  { title: 'about.edu1Title', sub: 'about.edu1Sub', desc: 'about.edu1Desc' },
  { title: 'about.edu2Title', sub: 'about.edu2Sub', desc: 'about.edu2Desc' },
  { title: 'about.edu3Title', sub: null, desc: 'about.edu3Desc' }
]
</script>
