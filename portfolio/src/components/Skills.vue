<template>
  <section id="skills" class="section-bg relative py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading :icon="BoltIcon" :title="$t('skills.title')" :subtitle="$t('skills.subtitle')" />

      <div class="space-y-16">
        <div v-for="group in skillGroups" :key="group.id" :ref="(el) => { if (el) groupEls[group.id] = el }" :data-group="group.id">
          <div class="mb-6 flex items-center gap-4">
            <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :class="TINTS[group.id]">
              <component :is="group.icon" class="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 class="text-xl font-bold text-slate-50">{{ $t(`skills.categories.${group.id}`) }}</h3>
            <span aria-hidden="true" class="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent rtl:bg-gradient-to-l" />
          </div>

          <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <li
              v-for="(skill, index) in group.skills"
              :key="skill.key"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :delay="(index % 5) * 60"
              :duration="500"
              class="group card flex flex-col items-center p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span class="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-slate-300 transition-colors group-hover:text-primary">
                <BrandIcon v-if="skill.brand" :icon="skill.brand" class="h-6 w-6" />
                <component :is="skill.icon" v-else class="h-6 w-6" aria-hidden="true" />
              </span>
              <h4 class="mt-3 flex min-h-[2.5rem] items-center text-sm font-semibold leading-snug text-slate-100">{{ $t(`skills.items.${skill.key}`) }}</h4>
              <!-- Ring: fills up to the skill level when the group scrolls into view -->
              <div class="relative mt-3 h-14 w-14">
                <svg viewBox="0 0 48 48" class="h-14 w-14 -rotate-90" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" fill="none" stroke-width="3" class="stroke-white/10" />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke-width="3"
                    stroke-linecap="round"
                    class="stroke-primary transition-[stroke-dashoffset] duration-[1400ms] ease-out"
                    :stroke-dasharray="RING"
                    :stroke-dashoffset="shown[group.id] ? RING * (1 - skill.level / 100) : RING"
                  />
                </svg>
                <span class="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-slate-300" dir="ltr">{{ skill.level }}%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p class="mt-16 flex items-center justify-center gap-2 text-center text-slate-400">
        <AcademicCapIcon class="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        {{ $t('skills.learning') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted, onBeforeUnmount } from 'vue'
import { AcademicCapIcon, BoltIcon } from '@heroicons/vue/24/outline'
import SectionHeading from './SectionHeading.vue'
import BrandIcon from './BrandIcon.vue'
import { skillGroups } from '../data/profile'

const RING = 2 * Math.PI * 20 // circumference of the ring (r = 20)
const TINTS = {
  software: 'bg-violet-500/15 text-violet-300',
  ai: 'bg-fuchsia-500/15 text-fuchsia-300',
  hardware: 'bg-amber-500/15 text-amber-300'
}

const groupEls = {}
const shown = reactive({})
let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      shown[entry.target.dataset.group] = true
      observer.unobserve(entry.target)
    }
  }, { threshold: 0.15 })
  for (const el of Object.values(groupEls)) observer.observe(el)
})

onBeforeUnmount(() => observer?.disconnect())
</script>
