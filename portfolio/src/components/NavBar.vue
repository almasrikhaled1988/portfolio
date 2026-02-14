<template>
  <nav 
    :class="[
      'fixed w-full z-50 transition-all duration-500',
      isScrolled 
        ? 'py-2' 
        : 'py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Glassmorphism container -->
      <div 
        :class="[
          'flex items-center justify-between rounded-2xl transition-all duration-500',
          isScrolled 
            ? 'bg-white/70 dark:bg-dark-800/70 backdrop-blur-xl shadow-glass dark:shadow-glass-dark border border-white/30 dark:border-white/10 px-4 py-2' 
            : 'bg-transparent px-2 py-3'
        ]"
      >
        <!-- Logo -->
        <a 
          href="#home" 
          class="text-lg font-bold tracking-tight group"
        >
          <span class="bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
            {{ $t('nav.name') }}
          </span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            v-for="item in menuItems" 
            :key="item.href" 
            :href="item.href"
            class="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-white/5 group"
          >
            {{ $t(item.key) }}
            <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-violet-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
          </a>
          
          <div class="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
          
          <!-- Language Switcher -->
          <div class="relative">
            <button 
              @click="isLangOpen = !isLangOpen"
              class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/50 dark:hover:bg-white/5"
            >
              <span class="uppercase text-xs tracking-wider">{{ locale }}</span>
              <ChevronDownIcon 
                class="w-4 h-4 transition-transform duration-300"
                :class="isLangOpen ? 'rotate-180' : ''"
              />
            </button>
            
            <!-- Language Dropdown -->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div 
                v-show="isLangOpen"
                class="absolute top-full mt-2 right-0 min-w-[140px] bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-xl shadow-glass dark:shadow-glass-dark border border-white/30 dark:border-white/10 overflow-hidden"
              >
                <button 
                  v-for="lang in availableLocales" 
                  :key="lang"
                  @click="changeLanguage(lang); isLangOpen = false"
                  class="w-full flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 transition-all duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  :class="{ 
                    'bg-gradient-to-r from-primary-500/10 to-violet-500/10 text-primary-600 dark:text-primary-400 font-medium': locale === lang 
                  }"
                >
                  <span>{{ $t(`lang.${lang}`) }}</span>
                  <CheckIcon v-if="locale === lang" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </button>
              </div>
            </Transition>
          </div>

          <!-- Dark Mode Toggle -->
          <button 
            @click="toggleDark()" 
            class="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/5 hover:text-primary-600 dark:hover:text-primary-400"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 rotate-90 scale-0"
              enter-to-class="opacity-100 rotate-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 -rotate-90 scale-0"
              mode="out-in"
            >
              <SunIcon v-if="isDark" class="w-5 h-5" />
              <MoonIcon v-else class="w-5 h-5" />
            </Transition>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-1 md:hidden">
          <button 
            @click="toggleDark()" 
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/5"
          >
            <SunIcon v-if="isDark" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
          
          <button 
            @click="isOpen = !isOpen" 
            class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 transition-all duration-300 hover:bg-white/50 dark:hover:bg-white/5"
          >
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 rotate-90 scale-0"
              enter-to-class="opacity-100 rotate-0 scale-100"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 rotate-0 scale-100"
              leave-to-class="opacity-0 -rotate-90 scale-0"
              mode="out-in"
            >
              <Bars3Icon v-if="!isOpen" class="w-6 h-6" />
              <XMarkIcon v-else class="w-6 h-6" />
            </Transition>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-show="isOpen"
          class="md:hidden mt-2 rounded-2xl bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl shadow-glass dark:shadow-glass-dark border border-white/30 dark:border-white/10 overflow-hidden"
        >
          <div class="p-2 space-y-1">
            <a 
              v-for="item in menuItems" 
              :key="item.href" 
              :href="item.href"
              @click="isOpen = false"
              class="block px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 font-medium transition-all duration-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {{ $t(item.key) }}
            </a>
            
            <div class="border-t border-slate-200 dark:border-slate-700 my-2" />
            
            <!-- Mobile Language Switcher -->
            <div class="px-4 py-2">
              <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">{{ $t('lang.select') || 'Language' }}</p>
              <div class="flex gap-2">
                <button 
                  v-for="lang in availableLocales" 
                  :key="lang"
                  @click="changeLanguage(lang); isOpen = false"
                  class="flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  :class="locale === lang 
                    ? 'bg-gradient-to-r from-primary-500 to-violet-500 text-white shadow-glow' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  "
                >
                  {{ $t(`lang.${lang}`) }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
  
  <!-- Click outside to close dropdowns -->
  <div 
    v-if="isLangOpen || isOpen" 
    class="fixed inset-0 z-40"
    @click="isLangOpen = false; isOpen = false"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark, useToggle } from '@vueuse/core'
import { 
  SunIcon, 
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  CheckIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isOpen = ref(false)
const isLangOpen = ref(false)
const isScrolled = ref(false)

const availableLocales = ['en', 'de', 'ar']

// Handle scroll for navbar background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('user-locale', lang)
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = lang
}

// Set initial direction
if (locale.value === 'ar') {
  document.documentElement.dir = 'rtl'
}

const menuItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' }
]
</script>
