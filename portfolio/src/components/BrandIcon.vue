<template>
  <!-- LinkedIn: simple-icons no longer ships this logo, so it is the outline icon from public/linkedin-icon.svg -->
  <svg
    v-if="name === 'linkedin'"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
  <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path :d="(icon || BRANDS[name]).path" />
  </svg>
</template>

<script setup>
import { siGithub } from 'simple-icons'

// Logos from simple-icons (free to use, CC0). Pass a simple-icons object as "icon", or a short name.
const BRANDS = { github: siGithub }

defineProps({
  name: { type: String, default: '' },
  icon: { type: Object, default: null }
})
</script>
