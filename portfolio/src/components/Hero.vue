<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-dark-900 dark:via-dark-800 dark:to-indigo-950">
      <!-- Floating orbs for visual interest -->
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 0.4, scale: 1 }"
        :transition="{ duration: 1200, delay: 300 }"
        class="absolute top-20 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
      />
      <div 
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 0.3, scale: 1 }"
        :transition="{ duration: 1200, delay: 500 }"
        class="absolute bottom-20 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s;"
      />
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MzY2ZjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2NGgtNHpNMjAgMjBoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
    </div>

    <!-- Main content container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left side: Main content -->
        <div class="text-center lg:text-start rtl:lg:text-right order-2 lg:order-1">
          <!-- Glassmorphism card -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 200 }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-glass dark:shadow-glass-dark mb-8"
          >
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="text-sm font-medium text-slate-700 dark:text-slate-200">
              {{ $t('hero.available') || 'Available for work' }}
            </span>
          </div>

          <!-- Main heading -->
          <h1 
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 400 }"
            class="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            <span class="block">{{ $t('hero.greeting') }}</span>
            <span class="block mt-2 bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
              {{ $t('hero.name') }}
            </span>
          </h1>

          <!-- Subtitle -->
          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 600 }"
            class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 rtl:lg:mr-0"
          >
            {{ $t('hero.subtitle') }}
          </p>

          <!-- CTA Buttons -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 800 }"
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start rtl:lg:justify-end"
          >
            <a 
              href="#projects" 
              class="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-1"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-violet-600 transition-all duration-300 group-hover:scale-105" />
              <span class="relative flex items-center gap-2">
                {{ $t('hero.viewWork') }}
                <ArrowRightIcon class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </span>
            </a>
            
            <a 
              href="#contact" 
              class="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 hover:-translate-y-1"
            >
              {{ $t('hero.getInTouch') }}
            </a>
          </div>

          <!-- Tech stack pills -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, delay: 1000 }"
            class="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start rtl:lg:justify-end"
          >
            <span class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
              Vue.js
            </span>
            <span class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
              JavaScript
            </span>
            <span class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
              AI/ML
            </span>
            <span class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700">
              Full Stack
            </span>
          </div>
        </div>

        <!-- Right side: Visual element -->
        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9, x: 50 }"
          :enter="{ opacity: 1, scale: 1, x: 0 }"
          :transition="{ duration: 1000, delay: 500 }"
          class="order-1 lg:order-2 flex justify-center"
        >
          <div class="relative w-full max-w-md aspect-square">
            <!-- Decorative circles -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse-slow" />
            
            <!-- Glass card with code preview -->
            <div class="relative h-full rounded-3xl bg-white/40 dark:bg-dark-800/40 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark p-6 overflow-hidden">
              <!-- Window controls -->
              <div class="flex items-center gap-2 mb-6">
                <div class="w-3 h-3 rounded-full bg-red-400" />
                <div class="w-3 h-3 rounded-full bg-yellow-400" />
                <div class="w-3 h-3 rounded-full bg-green-400" />
              </div>
              
              <!-- Code preview content -->
              <div class="space-y-3 font-mono text-sm">
                <div class="flex items-center gap-2">
                  <span class="text-primary-600 dark:text-primary-400">const</span>
                  <span class="text-slate-800 dark:text-slate-200">developer</span>
                  <span class="text-slate-600 dark:text-slate-400">=</span>
                  <span class="text-slate-600 dark:text-slate-400">{</span>
                </div>
                <div class="pl-4 space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="text-violet-600 dark:text-violet-400">name</span>
                    <span class="text-slate-600 dark:text-slate-400">:</span>
                    <span class="text-green-600 dark:text-green-400">'{{ $t('hero.name') }}'</span>
                    <span class="text-slate-600 dark:text-slate-400">,</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-violet-600 dark:text-violet-400">role</span>
                    <span class="text-slate-600 dark:text-slate-400">:</span>
                    <span class="text-green-600 dark:text-green-400">'Full Stack Developer'</span>
                    <span class="text-slate-600 dark:text-slate-400">,</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-violet-600 dark:text-violet-400">skills</span>
                    <span class="text-slate-600 dark:text-slate-400">:</span>
                    <span class="text-slate-600 dark:text-slate-400">[</span>
                    <span class="text-green-600 dark:text-green-400">'Vue'</span>
                    <span class="text-slate-600 dark:text-slate-400">,</span>
                    <span class="text-green-600 dark:text-green-400">'AI'</span>
                    <span class="text-slate-600 dark:text-slate-400">,</span>
                    <span class="text-green-600 dark:text-green-400">'Node'</span>
                    <span class="text-slate-600 dark:text-slate-400">],</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-violet-600 dark:text-violet-400">available</span>
                    <span class="text-slate-600 dark:text-slate-400">:</span>
                    <span class="text-primary-600 dark:text-primary-400">true</span>
                  </div>
                </div>
                <div class="text-slate-600 dark:text-slate-400">};</div>
              </div>
              
              <!-- Floating badge -->
              <div class="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-violet-600 rounded-xl shadow-glow text-white text-sm font-medium animate-float">
                {{ $t('hero.badge') || 'Open to work' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div 
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0 }"
      :transition="{ duration: 800, delay: 1200 }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span class="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">{{ $t('hero.scroll') || 'Scroll' }}</span>
      <div class="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-2">
        <div class="w-1.5 h-3 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline';
</script>
