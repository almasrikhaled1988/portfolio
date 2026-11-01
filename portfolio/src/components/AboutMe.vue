<template>
  <section id="about" class="section-bg relative py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading :icon="UserCircleIcon" :title="$t('about.title')" :subtitle="$t('about.subtitle')" />

      <div class="grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
        <!-- Profile card (stays in view while the timeline scrolls past on large screens) -->
        <aside
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="card self-start p-6 lg:sticky lg:top-24"
        >
          <div class="grid items-center gap-6 sm:grid-cols-[200px_minmax(0,1fr)] lg:block">
            <div class="rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-purple-500 p-[2px] shadow-lg shadow-primary/10">
              <img
                src="../assets/DSC04177_CV.webp"
                :alt="$t('about.photoAlt')"
                width="482"
                height="621"
                loading="lazy"
                decoding="async"
                class="aspect-[4/5] w-full rounded-[14px] bg-night-1 object-cover"
              >
            </div>
            <div class="lg:mt-6">
              <h3 class="text-2xl font-bold text-slate-50">{{ $t('nav.name') }}</h3>
              <p class="mt-1 font-medium text-primary">{{ $t('hero.role') }}</p>
              <dl class="mt-6 space-y-4 text-sm">
                <div v-for="fact in facts" :key="fact.label" class="relative ps-8">
                  <dt class="text-slate-400">
                    <component :is="fact.icon" class="absolute start-0 top-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                    {{ $t(fact.label) }}
                  </dt>
                  <dd class="mt-0.5 font-medium text-slate-100">{{ $t(fact.value) }}</dd>
                </div>
              </dl>
              <a :href="links.cv" download class="btn-gradient mt-6 w-full">
                <ArrowDownTrayIcon class="h-5 w-5" aria-hidden="true" />
                {{ $t('about.downloadCV') }}
              </a>
            </div>
          </div>
        </aside>

        <div class="min-w-0 space-y-14">
          <!-- How I got here -->
          <div>
            <h3 class="bar-title">{{ $t('about.storyTitle') }}</h3>
            <div class="mt-6 grid gap-4 md:grid-cols-3">
              <article
                v-for="(story, index) in stories"
                :key="story.title"
                v-motion
                :initial="{ opacity: 0, y: 24 }"
                :visible-once="{ opacity: 1, y: 0 }"
                :delay="index * 100"
                :duration="600"
                class="card p-6 transition-colors duration-300 hover:border-primary/30"
              >
                <span class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <component :is="story.icon" class="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 class="mt-5 text-lg font-semibold text-slate-50">{{ $t(story.title) }}</h4>
                <p class="mt-2 text-[15px] leading-relaxed text-slate-400">{{ $t(story.text) }}</p>
              </article>
            </div>
          </div>

          <!-- Experience timeline -->
          <div>
            <h3 class="bar-title">{{ $t('about.experienceTitle') }}</h3>
            <ol class="relative mt-8 space-y-6 border-s border-white/10 ps-8 sm:ps-10">
              <li
                v-for="item in experience"
                :key="item.id"
                v-motion
                :initial="{ opacity: 0, y: 24 }"
                :visible-once="{ opacity: 1, y: 0 }"
                :duration="600"
                class="relative"
              >
                <span
                  aria-hidden="true"
                  class="absolute -start-[39px] top-7 h-3.5 w-3.5 rounded-full border-2 border-primary bg-night-0 sm:-start-[47px]"
                  style="box-shadow: 0 0 0 4px rgb(var(--primary) / 0.15)"
                />
                <div class="card p-6 transition-colors duration-300 hover:border-primary/30">
                  <p class="font-mono text-xs text-primary">{{ $t(`experience.items.${item.id}.period`) }}</p>
                  <h4 class="mt-2 text-lg font-semibold text-slate-50">{{ $t(`experience.items.${item.id}.title`) }}</h4>
                  <p class="text-sm text-slate-400">{{ $t(`experience.items.${item.id}.company`) }}</p>
                  <p class="mt-3 text-[15px] leading-relaxed text-slate-400">{{ $t(`experience.items.${item.id}.desc`) }}</p>
                  <ul class="mt-4 flex flex-wrap gap-2">
                    <li v-for="tag in item.tags" :key="tag" class="tag-muted">{{ tag }}</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          <!-- Languages and certifications -->
          <div class="grid gap-4 md:grid-cols-2">
            <div v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0 }" :duration="600" class="card p-6">
              <h3 class="bar-title text-lg">{{ $t('experience.languages') }}</h3>
              <ul class="mt-5 divide-y divide-white/5">
                <li v-for="lang in spokenLanguages" :key="lang" class="flex items-center justify-between gap-4 py-3">
                  <span class="font-medium text-slate-100">{{ $t(`experience.lang.${lang}`) }}</span>
                  <span class="tag">{{ $t(`experience.lang.${lang}Level`) }}</span>
                </li>
              </ul>
            </div>
            <div v-motion :initial="{ opacity: 0, y: 24 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="600" class="card p-6">
              <h3 class="bar-title text-lg">{{ $t('experience.certifications') }}</h3>
              <ul class="mt-5 flex flex-wrap gap-2">
                <li v-for="cert in certifications" :key="cert" class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <CheckBadgeIcon class="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {{ $t(`experience.certs.${cert}`) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ArrowDownTrayIcon, CheckBadgeIcon, CodeBracketIcon, CpuChipIcon, MapPinIcon, SparklesIcon, UserCircleIcon, WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
import SectionHeading from './SectionHeading.vue'
import { certifications, experience, links, spokenLanguages } from '../data/profile'

const facts = [
  { icon: MapPinIcon, label: 'about.basedIn', value: 'about.basedInValue' },
  { icon: SparklesIcon, label: 'about.focus', value: 'about.focusValue' },
  { icon: WrenchScrewdriverIcon, label: 'about.background', value: 'about.backgroundValue' }
]

const stories = [
  { icon: CpuChipIcon, title: 'about.story1Title', text: 'about.story1Text' },
  { icon: CodeBracketIcon, title: 'about.story2Title', text: 'about.story2Text' },
  { icon: SparklesIcon, title: 'about.story3Title', text: 'about.story3Text' }
]
</script>
