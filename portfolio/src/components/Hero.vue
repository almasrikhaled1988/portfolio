<template>
  <section id="home" class="section-bg relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 lg:pb-20">
    <!-- Faint floating icons in the background -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <CodeBracketIcon class="absolute start-[5%] top-[17%] h-36 w-36 animate-float text-white/[0.04]" />
      <CubeIcon class="absolute end-[5%] top-[40%] h-28 w-28 animate-float text-white/[0.045] [animation-delay:-2s] lg:end-auto lg:start-[38%] lg:top-[72%]" />
      <CommandLineIcon class="absolute bottom-[7%] end-[9%] h-24 w-24 animate-float text-purple-400/10 [animation-delay:-4s]" />
    </div>

    <div class="relative mx-auto grid w-full max-w-7xl items-center gap-20 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div class="text-center lg:text-start">
        <p
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :enter="{ opacity: 1, y: 0 }"
          :duration="600"
          class="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-surface/50 px-4 py-2 text-sm text-primary shadow-lg shadow-primary/5 backdrop-blur-md"
        >
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {{ $t('hero.badge') }}
        </p>

        <h1
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="100"
          :duration="700"
          class="mt-8 text-5xl font-extrabold tracking-tight text-slate-50 sm:text-6xl lg:leading-[1.2] xl:text-7xl"
        >
          {{ $t('hero.greeting') }} <span class="text-gradient-animated">{{ $t('hero.name') }}</span>
          <span class="mt-3 block text-3xl font-bold tracking-tight text-slate-400 sm:text-4xl xl:text-5xl">{{ $t('hero.role') }}</span>
        </h1>

        <p
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200"
          :duration="700"
          class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl lg:mx-0"
        >
          {{ $t('hero.intro') }}
        </p>

        <ul
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="300"
          :duration="700"
          class="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3 lg:mx-0 lg:justify-start"
        >
          <li v-for="tech in heroStack" :key="tech" class="chip cursor-default">{{ tech }}</li>
        </ul>

        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="400"
          :duration="700"
          class="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start"
        >
          <a href="#projects" class="btn-outline w-full sm:w-auto">{{ $t('hero.cta') }}</a>
          <div class="flex gap-4">
            <a :href="links.github" target="_blank" rel="noopener" class="icon-btn" :aria-label="$t('hero.github')" :title="$t('hero.github')">
              <BrandIcon name="github" class="h-5 w-5" />
            </a>
            <a :href="links.linkedin" target="_blank" rel="noopener" class="icon-btn" :aria-label="$t('hero.linkedin')" :title="$t('hero.linkedin')">
              <BrandIcon name="linkedin" class="h-5 w-5" />
            </a>
            <a :href="`mailto:${links.email}`" class="icon-btn" :aria-label="$t('hero.email')" :title="$t('hero.email')">
              <EnvelopeIcon class="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div v-motion :initial="{ opacity: 0, y: 32 }" :enter="{ opacity: 1, y: 0 }" :delay="300" :duration="800">
        <CodeWindow />
      </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon, CommandLineIcon, CubeIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import BrandIcon from './BrandIcon.vue'
import CodeWindow from './CodeWindow.vue'
import { heroStack, links } from '../data/profile'
</script>
