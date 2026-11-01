<template>
  <section id="projects" class="section-bg relative py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading :icon="RocketLaunchIcon" icon-class="text-purple-400" :title="$t('projects.title')" :subtitle="$t('projects.subtitle')" />

      <!-- Search and filters -->
      <div class="flex flex-col gap-4 sm:flex-row">
        <label class="relative flex-1">
          <span class="sr-only">{{ $t('projects.search') }}</span>
          <MagnifyingGlassIcon class="pointer-events-none absolute start-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input
            v-model="query"
            type="search"
            :placeholder="$t('projects.search')"
            class="h-14 w-full rounded-2xl border border-white/10 bg-surface/40 pe-5 ps-14 text-base text-slate-100 transition placeholder:text-slate-500 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
        </label>
        <button
          type="button"
          class="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border px-6 font-medium transition"
          :class="showFilters || activeCount ? 'border-primary/40 bg-primary/10 text-primary' : 'border-white/10 bg-surface/40 text-slate-200 hover:border-white/20'"
          :aria-expanded="showFilters"
          aria-controls="project-filters"
          @click="showFilters = !showFilters"
        >
          <FunnelIcon class="h-5 w-5" aria-hidden="true" />
          {{ $t('projects.filters') }}
          <span v-if="activeCount" class="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary px-1.5 text-xs font-bold text-night-0">{{ activeCount }}</span>
        </button>
      </div>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <div v-show="showFilters" id="project-filters" class="mt-4 rounded-2xl border border-white/10 bg-surface/40 p-6">
          <fieldset>
            <legend class="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <span class="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {{ $t('projects.type') }}
            </legend>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                v-for="category in categories"
                :key="category"
                type="button"
                class="rounded-xl border px-4 py-2 text-sm transition"
                :class="types.includes(category) ? 'border-primary/50 bg-primary/15 text-primary' : 'border-white/10 bg-night-0/40 text-slate-200 hover:border-white/25'"
                :aria-pressed="types.includes(category)"
                @click="toggle(types, category)"
              >
                {{ $t(`projects.categories.${category}`) }}
              </button>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <legend class="flex items-center gap-2 text-sm font-semibold text-slate-300">
              <span class="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              {{ $t('projects.technology') }}
            </legend>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                v-for="tech in technologies"
                :key="tech"
                type="button"
                class="rounded-xl border px-4 py-2 text-sm transition"
                :class="techs.includes(tech) ? 'border-primary/50 bg-primary/15 text-primary' : 'border-white/10 bg-night-0/40 text-slate-200 hover:border-white/25'"
                :aria-pressed="techs.includes(tech)"
                @click="toggle(techs, tech)"
              >
                {{ tech }}
              </button>
            </div>
          </fieldset>
          <button v-if="activeCount" type="button" class="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline" @click="clearFilters">
            <XMarkIcon class="h-4 w-4" aria-hidden="true" />
            {{ $t('projects.clear') }}
          </button>
        </div>
      </Transition>

      <!-- Project cards: the whole card opens the details window -->
      <ul class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(project, index) in filtered"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="(index % 3) * 100"
          :duration="600"
        >
          <article class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface/50 transition duration-300 focus-within:border-primary/50 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_40px_-8px_rgb(var(--primary)/0.4)]">
            <div class="relative aspect-[16/10] overflow-hidden bg-night-0">
              <img
                :src="project.image"
                alt=""
                :width="project.imageSize[0]"
                :height="project.imageSize[1]"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              >
              <div aria-hidden="true" class="absolute inset-0 flex items-center justify-center bg-night-0/60 opacity-0 backdrop-blur-[3px] transition duration-300 group-focus-within:opacity-100 group-hover:opacity-100">
                <span class="inline-flex translate-y-2 items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-night-0 shadow-lg transition duration-300 group-hover:translate-y-0">
                  <EyeIcon class="h-5 w-5" />
                  {{ $t('projects.viewDetails') }}
                </span>
              </div>
              <span class="absolute end-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-night-0/80 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
                <Square3Stack3DIcon class="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {{ $t(`projects.categories.${project.category}`) }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-xl font-bold text-slate-50 transition-colors group-hover:text-primary">
                <button type="button" class="text-start after:absolute after:inset-0 after:content-[''] focus:outline-none" aria-haspopup="dialog" @click="selected = project">
                  {{ $t(`projects.items.${project.id}.title`) }}
                </button>
              </h3>
              <p class="mt-3 line-clamp-3 text-[15px] leading-relaxed text-slate-400">{{ $t(`projects.items.${project.id}.desc`) }}</p>
              <ul class="mt-auto flex flex-wrap gap-2 pt-5">
                <li v-for="tech in project.tech.slice(0, 3)" :key="tech" class="tag">{{ tech }}</li>
                <li v-if="project.tech.length > 3" class="tag-muted">+{{ project.tech.length - 3 }}</li>
              </ul>
            </div>
          </article>
        </li>
      </ul>

      <p v-if="!filtered.length" class="mt-12 rounded-2xl border border-dashed border-white/10 p-10 text-center text-slate-400" role="status">
        {{ $t('projects.empty') }}
        <button type="button" class="ms-2 font-medium text-primary hover:underline" @click="resetAll">{{ $t('projects.clear') }}</button>
      </p>

      <div class="mt-16 text-center">
        <a :href="links.github" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-slate-400 transition hover:text-primary">
          <ArrowTopRightOnSquareIcon class="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
          {{ $t('projects.moreOnGithub') }}
        </a>
      </div>
    </div>

    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  ArrowTopRightOnSquareIcon, EyeIcon, FunnelIcon, MagnifyingGlassIcon, RocketLaunchIcon, Square3Stack3DIcon, XMarkIcon
} from '@heroicons/vue/24/outline'
import SectionHeading from './SectionHeading.vue'
import ProjectModal from './ProjectModal.vue'
import { projects, links } from '../data/profile'

const { t, locale } = useI18n()

const query = ref('')
const showFilters = ref(false)
const types = ref([])
const techs = ref([])
const selected = ref(null)

const categories = [...new Set(projects.map((project) => project.category))]
const technologies = [...new Set(projects.flatMap((project) => project.tech))]
const activeCount = computed(() => types.value.length + techs.value.length)

const toggle = (list, value) => {
  const index = list.indexOf(value)
  if (index === -1) list.push(value)
  else list.splice(index, 1)
}
const clearFilters = () => {
  types.value = []
  techs.value = []
}
const resetAll = () => {
  clearFilters()
  query.value = ''
}

// Lowercase without accents, so "pokemon" also finds "Pokémon"
const simplify = (text) => text.toLocaleLowerCase(locale.value).normalize('NFD').replace(/\p{Diacritic}/gu, '')

// A project shows when it matches the search text, one of the chosen types and one of the chosen technologies
const filtered = computed(() => {
  const search = simplify(query.value.trim())
  return projects.filter((project) => {
    if (types.value.length && !types.value.includes(project.category)) return false
    if (techs.value.length && !project.tech.some((tech) => techs.value.includes(tech))) return false
    if (!search) return true
    const text = [
      t(`projects.items.${project.id}.title`),
      t(`projects.items.${project.id}.desc`),
      t(`projects.categories.${project.category}`),
      ...project.tech
    ].join(' ')
    return simplify(text).includes(search)
  })
})
</script>
