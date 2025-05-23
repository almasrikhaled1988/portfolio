<template>
  <nav class="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="#home" class="text-xl font-bold text-gray-900 dark:text-white">
            Your Name
          </a>
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a v-for="item in menuItems" 
             :key="item.href" 
             :href="item.href"
             class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            {{ item.name }}
          </a>
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
      <div v-show="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a v-for="item in menuItems" 
             :key="item.href" 
             :href="item.href"
             @click="isOpen = false"
             class="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { 
  SunIcon, 
  MoonIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/vue/24/outline'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const isOpen = ref(false)

const menuItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>
