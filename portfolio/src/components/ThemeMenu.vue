<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <MenuButton
      class="nav-item"
      :class="open ? 'bg-white/5 text-primary' : ''"
      :aria-label="compact ? $t('nav.chooseTheme') : undefined"
      :title="$t('nav.chooseTheme')"
    >
      <SwatchIcon :class="compact ? 'h-5 w-5' : 'h-4 w-4'" aria-hidden="true" />
      <span v-if="!compact">{{ $t('nav.themes') }}</span>
    </MenuButton>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="scale-95 opacity-0"
      leave-active-class="transition duration-100 ease-in"
      leave-to-class="scale-95 opacity-0"
    >
      <MenuItems class="absolute end-0 z-10 mt-2 w-52 origin-top-right rounded-xl border border-white/10 bg-surface/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl focus:outline-none rtl:origin-top-left">
        <MenuItem v-for="item in themes" :key="item.id" v-slot="{ active }">
          <button
            type="button"
            class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition-colors"
            :class="[active ? 'bg-white/5' : '', theme === item.id ? 'text-primary' : 'text-slate-200']"
            @click="theme = item.id"
          >
            <span class="h-4 w-4 shrink-0 rounded-full ring-1 ring-white/20" :style="{ background: item.swatch }" aria-hidden="true" />
            {{ $t(`themes.${item.id}`) }}
            <CheckIcon v-if="theme === item.id" class="ms-auto h-4 w-4" aria-hidden="true" />
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { SwatchIcon, CheckIcon } from '@heroicons/vue/24/outline'
import { useTheme } from '../composables/useTheme'

// compact: icon only (phones and small laptops)
defineProps({ compact: { type: Boolean, default: false } })

const { theme, themes } = useTheme()
</script>
