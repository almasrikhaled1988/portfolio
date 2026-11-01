<template>
  <!-- Centered section header: big icon with a small sparkle, gradient title, gray subtitle -->
  <div
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visible-once="{ opacity: 1, y: 0 }"
    :transition="{ duration: 600 }"
    class="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
  >
    <div class="relative inline-flex">
      <component :is="icon" class="h-16 w-16" :class="iconClass" aria-hidden="true" />
      <component :is="badge" class="absolute -end-4 -top-3 h-7 w-7 text-amber-400" aria-hidden="true" />
    </div>
    <h2 class="text-gradient mx-auto mt-6 w-fit pb-1 text-4xl font-bold leading-tight sm:text-5xl">{{ title }}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { SparklesIcon } from '@heroicons/vue/24/outline'

defineProps({
  icon: { type: [Object, Function], required: true },
  iconClass: { type: String, default: 'text-primary' },
  badge: { type: [Object, Function], default: SparklesIcon },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' }
})
</script>
