<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-4 opacity-0"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="translate-y-4 opacity-0"
  >
    <a
      v-if="visible"
      href="#home"
      class="fixed bottom-6 end-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-night-0 shadow-lg shadow-primary/30 transition hover:-translate-y-1"
      :aria-label="$t('footer.backToTop')"
      :title="$t('footer.backToTop')"
    >
      <ChevronUpIcon class="h-6 w-6" stroke-width="2.5" aria-hidden="true" />
    </a>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/24/outline'

// Shows after scrolling down a bit
const visible = ref(false)
const handleScroll = () => { visible.value = window.scrollY > 600 }

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
