<template>
  <footer class="border-t border-white/5 bg-night-1">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <a href="#home" class="text-gradient text-2xl font-bold">{{ $t('nav.logo') }}</a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{{ $t('footer.tagline') }}</p>
        </div>
        <nav :aria-label="$t('footer.quickLinks')">
          <h3 class="font-semibold text-slate-50">{{ $t('footer.quickLinks') }}</h3>
          <ul class="mt-4 space-y-2.5 text-sm">
            <li v-for="link in quickLinks" :key="link.id">
              <a :href="`#${link.id}`" class="text-slate-400 transition hover:text-primary">{{ $t(link.key) }}</a>
            </li>
          </ul>
        </nav>
        <div>
          <h3 class="font-semibold text-slate-50">{{ $t('footer.connect') }}</h3>
          <div class="mt-4 flex gap-3">
            <a :href="links.github" target="_blank" rel="noopener" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-primary/15 hover:text-primary" :aria-label="$t('hero.github')" :title="$t('hero.github')">
              <BrandIcon name="github" class="h-5 w-5" />
            </a>
            <a :href="links.linkedin" target="_blank" rel="noopener" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-primary/15 hover:text-primary" :aria-label="$t('hero.linkedin')" :title="$t('hero.linkedin')">
              <BrandIcon name="linkedin" class="h-5 w-5" />
            </a>
            <a :href="`mailto:${links.email}`" class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-primary/15 hover:text-primary" :aria-label="$t('hero.email')" :title="$t('hero.email')">
              <EnvelopeIcon class="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ $t('nav.name') }}. {{ $t('footer.rights') }}</p>
        <p>{{ $t('footer.builtWith') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import BrandIcon from './BrandIcon.vue'
import { links } from '../data/profile'

const year = new Date().getFullYear()
const quickLinks = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' }
]
</script>
