<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <MenuButton class="nav-item" :class="open ? 'bg-white/5 text-primary' : ''" :title="$t('nav.language')">
      <LanguageIcon :class="compact ? 'h-5 w-5' : 'h-4 w-4'" aria-hidden="true" />
      <span class="sr-only">{{ $t('nav.language') }}:</span>
      <span class="font-medium uppercase">{{ locale }}</span>
    </MenuButton>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="scale-95 opacity-0"
    >
      <MenuItems class="absolute end-0 z-10 mt-2 w-44 origin-top-right rounded-xl border border-white/10 bg-surface/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl focus:outline-none rtl:origin-top-left">
        <MenuItem v-for="lang in LOCALES" :key="lang" v-slot="{ active }">
          <button
            type="button"
            :lang="lang"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition-colors"
            :class="[active ? 'bg-white/5' : '', locale === lang ? 'text-primary' : 'text-slate-200']"
            @click="changeLanguage(lang)"
          >
            <span class="w-6 font-mono text-xs uppercase text-slate-500" aria-hidden="true">{{ lang }}</span>
            {{ $t(`lang.${lang}`) }}
            <CheckIcon v-if="locale === lang" class="ms-auto h-4 w-4" aria-hidden="true" />
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { LanguageIcon, CheckIcon } from '@heroicons/vue/24/outline'

// compact: slightly bigger icon (phones and small laptops)
defineProps({ compact: { type: Boolean, default: false } })

const LOCALES = ['en', 'de', 'ar']
const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang
  try {
    localStorage.setItem('user-locale', lang)
  } catch (e) {
    // not saved, but the language still changes for this visit
  }
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = lang
}
</script>
