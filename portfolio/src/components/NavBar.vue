<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <!-- Background on its own layer: a backdrop-filter on <header> itself would make the header the containing
         block of the fixed overlay below and squeeze the overlay into the 64px header -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 border-b border-white/5 bg-surface/75 backdrop-blur-xl" />

    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
      <a href="#home" class="text-gradient text-2xl font-bold tracking-tight" @click="setMenu(false)">{{ $t('nav.logo') }}</a>

      <!-- Large screens: everything in one row -->
      <nav class="hidden items-center gap-1 xl:flex" :aria-label="$t('nav.main')">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-item"
          :class="active === item.id ? 'nav-item-active' : ''"
          :aria-current="active === item.id ? 'true' : undefined"
        >
          <component :is="item.icon" class="h-4 w-4" aria-hidden="true" />
          {{ $t(item.key) }}
        </a>
        <span class="mx-3 h-6 w-px bg-white/10" aria-hidden="true" />
        <a :href="links.cv" target="_blank" rel="noopener" class="nav-item">
          <DocumentTextIcon class="h-4 w-4" aria-hidden="true" />
          {{ $t('nav.resume') }}
        </a>
        <ThemeMenu />
        <LanguageMenu />
      </nav>

      <!-- Phones, tablets and small laptops: language, theme, menu button -->
      <div class="flex items-center gap-1 xl:hidden">
        <LanguageMenu compact />
        <ThemeMenu compact />
        <span class="mx-2 h-6 w-px bg-white/10" aria-hidden="true" />
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 transition hover:bg-white/5"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          :aria-label="isOpen ? $t('nav.closeMenu') : $t('nav.openMenu')"
          @click="setMenu(!isOpen)"
        >
          <XMarkIcon v-if="isOpen" class="h-6 w-6" aria-hidden="true" />
          <Bars3Icon v-else class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Reading progress along the bottom edge of the navbar -->
    <div
      aria-hidden="true"
      class="absolute bottom-0 start-0 h-0.5 w-full origin-left bg-gradient-to-r from-primary to-purple-500 rtl:origin-right rtl:bg-gradient-to-l"
      :style="{ transform: `scaleX(${progress})` }"
    />

    <!-- Phone menu: a panel under the navbar, with a dark layer over the page that closes it -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="xl:hidden">
        <div class="fixed inset-x-0 bottom-0 top-16 bg-night-0/60" aria-hidden="true" @click="setMenu(false)" />
        <div id="mobile-menu" class="absolute inset-x-0 top-full border-b border-white/5 bg-surface/95 px-4 pb-6 pt-3 shadow-2xl shadow-black/50 backdrop-blur-xl sm:px-6">
          <nav class="mx-auto flex max-w-7xl flex-col gap-1" :aria-label="$t('nav.main')">
            <a
              v-for="item in items"
              :key="item.id"
              :href="`#${item.id}`"
              class="flex items-center gap-3 rounded-xl px-4 py-3 text-base transition"
              :class="active === item.id ? 'bg-primary/10 text-primary' : 'text-slate-200 hover:bg-white/5'"
              :aria-current="active === item.id ? 'true' : undefined"
              @click="setMenu(false)"
            >
              <component :is="item.icon" class="h-5 w-5" aria-hidden="true" />
              {{ $t(item.key) }}
            </a>
            <div class="my-2 h-px bg-white/10" aria-hidden="true" />
            <a :href="links.cv" target="_blank" rel="noopener" class="flex items-center gap-3 rounded-xl px-4 py-3 text-base text-slate-200 transition hover:bg-white/5">
              <DocumentTextIcon class="h-5 w-5" aria-hidden="true" />
              {{ $t('nav.resume') }}
            </a>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Bars3Icon, ChatBubbleOvalLeftEllipsisIcon, CodeBracketIcon, DocumentTextIcon, FolderIcon, HomeIcon, UserIcon, XMarkIcon
} from '@heroicons/vue/24/outline'
import ThemeMenu from './ThemeMenu.vue'
import LanguageMenu from './LanguageMenu.vue'
import { links } from '../data/profile'

const items = [
  { id: 'home', key: 'nav.home', icon: HomeIcon },
  { id: 'about', key: 'nav.about', icon: UserIcon },
  { id: 'skills', key: 'nav.skills', icon: CodeBracketIcon },
  { id: 'projects', key: 'nav.projects', icon: FolderIcon },
  { id: 'contact', key: 'nav.contact', icon: ChatBubbleOvalLeftEllipsisIcon }
]

const isOpen = ref(false)
const active = ref('home')
const progress = ref(0)

// The page behind the open phone menu doesn't scroll
const setMenu = (open) => {
  isOpen.value = open
  document.documentElement.style.overflow = open ? 'hidden' : ''
}

let frame = 0
const handleScroll = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
  })
}
const handleKeydown = (event) => { if (event.key === 'Escape' && isOpen.value) setMenu(false) }
// The phone menu is hidden from 1280px (Tailwind "xl"): close it when the window gets that wide
const wideScreen = window.matchMedia('(min-width: 1280px)')
const handleWideScreen = (event) => { if (event.matches && isOpen.value) setMenu(false) }

// Highlight the menu item of the section that crosses the middle of the screen
let observer
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
  wideScreen.addEventListener('change', handleWideScreen)
  handleScroll()
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) if (entry.isIntersecting) active.value = entry.target.id
  }, { rootMargin: '-45% 0px -50% 0px' })
  for (const item of items) {
    const section = document.getElementById(item.id)
    if (section) observer.observe(section)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  wideScreen.removeEventListener('change', handleWideScreen)
  cancelAnimationFrame(frame)
  observer?.disconnect()
  if (isOpen.value) setMenu(false)
})
</script>
