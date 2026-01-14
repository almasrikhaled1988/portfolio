<template>
  <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#home" class="text-xl font-bold text-gray-900 dark:text-white">
            {{ $t('nav.name') }}
          </a>
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
          <a v-for="item in menuItems" 
             :key="item.href" 
             :href="item.href"
             class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            {{ $t(item.key) }}
          </a>
          
          <!-- Language Switcher -->
          <div class="relative group">
            <button class="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2">
              <LanguageIcon class="h-5 w-5" />
              <span class="uppercase">{{ locale }}</span>
            </button>
            <div class="absolute right-0 w-32 mt-0 origin-top-right bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div class="py-1">
                <button v-for="lang in availableLocales" :key="lang"
                        @click="changeLanguage(lang)"
                        class="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                        :class="{ 'font-bold text-blue-600': locale === lang }">
                  {{ $t(`lang.${lang}`) }}
                </button>
              </div>
            </div>
          </div>

          <button @click="toggleDark()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <SunIcon v-if="isDark" class="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <MoonIcon v-else class="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center md:hidden">
          <button @click="toggleDark()" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 mr-2">
            <SunIcon v-if="isDark" class="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <MoonIcon v-else class="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button @click="isOpen = !isOpen" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bars3Icon v-if="!isOpen" class="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <XMarkIcon v-else class="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-show="isOpen" class="md:hidden border-t dark:border-gray-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="item in menuItems" 
             :key="item.href" 
             :href="item.href"
             @click="isOpen = false"
             class="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            {{ $t(item.key) }}
          </a>
          <!-- Mobile Language Switcher -->
          <div class="flex space-x-4 px-3 py-2">
            <button v-for="lang in availableLocales" :key="lang"
                    @click="changeLanguage(lang); isOpen = false"
                    class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600"
                    :class="{ 'text-blue-600 font-bold': locale === lang }">
              {{ $t(`lang.${lang}`) }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDark, useToggle } from '@vueuse/core'
import { 
  SunIcon, 
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  LanguageIcon
} from '@heroicons/vue/24/outline'

const { locale } = useI18n()
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isOpen = ref(false)

const availableLocales = ['en', 'de', 'ar']

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
