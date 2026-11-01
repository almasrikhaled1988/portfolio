<template>
  <div ref="root" class="relative mx-auto w-full max-w-lg">
    <!-- Decorative glyphs around the window -->
    <span aria-hidden="true" class="pointer-events-none absolute -start-6 -top-12 animate-float font-mono text-4xl font-bold text-primary/40 sm:-start-12">&lt;/&gt;</span>
    <span aria-hidden="true" class="pointer-events-none absolute -bottom-10 -end-2 animate-float text-5xl text-purple-400/60 [animation-delay:-3.5s] sm:-end-10">⌘</span>

    <div class="relative overflow-hidden rounded-xl border border-primary/25 bg-[#1e1e1e]/95 shadow-[0_0_70px_-12px_rgb(var(--primary)/0.45)]">
      <!-- Title bar -->
      <div class="flex items-center gap-2 border-b border-white/5 bg-white/[0.04] px-4 py-3" dir="ltr">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span class="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span class="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span class="flex flex-1 items-center justify-center gap-2 pe-14 font-mono text-xs text-slate-400">
          <CommandLineIcon class="h-3.5 w-3.5" aria-hidden="true" />
          profile.config.js
        </span>
      </div>

      <div class="p-5 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm" dir="ltr">
        <!-- The invisible full copy keeps the window at its final size while the code is being typed -->
        <div class="relative" aria-hidden="true">
          <pre class="invisible whitespace-pre-wrap break-words font-mono">{{ fullText }}</pre>
          <pre class="absolute inset-0 whitespace-pre-wrap break-words font-mono"><span
            v-for="(token, index) in tokens"
            :key="index"
            :class="COLORS[token.type]"
          >{{ visibleText(token) }}</span><span v-if="!done" class="ms-px inline-block h-[1.15em] w-2 translate-y-[3px] animate-blink bg-primary" /></pre>
        </div>

        <!-- Appears when the typing is finished -->
        <div
          class="mt-6 border-t border-white/10 pt-6 transition-all duration-700"
          :class="done ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'"
        >
          <p dir="auto" class="text-[11px] uppercase tracking-[0.15em] text-slate-400 rtl:font-sans rtl:text-xs">{{ $t('hero.status') }}</p>
          <a
            :href="links.rispulse"
            target="_blank"
            rel="noopener"
            class="group mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5 text-primary transition hover:border-primary/60 hover:bg-primary/20"
          >
            <ChevronRightIcon class="h-4 w-4 text-slate-300" aria-hidden="true" />
            ./launch_rispulse.sh
            <span class="sr-only">: {{ $t('hero.launch') }}</span>
            <SparklesIcon class="h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { ChevronRightIcon, CommandLineIcon, SparklesIcon } from '@heroicons/vue/24/outline'
import { heroCode, links } from '../data/profile'

// Syntax colors; the keyword follows the color theme
const COLORS = {
  keyword: 'text-primary',
  name: 'text-sky-200',
  key: 'text-slate-200',
  string: 'text-amber-200',
  boolean: 'text-purple-300',
  punct: 'text-slate-400',
  '': ''
}

// Flatten the lines into one list of colored pieces, each knowing where it starts in the full text
const tokens = []
let total = 0
heroCode.forEach((line, index) => {
  for (const [text, type] of line) {
    tokens.push({ text, type, start: total })
    total += text.length
  }
  if (index < heroCode.length - 1) {
    tokens.push({ text: '\n', type: '', start: total })
    total += 1
  }
})
const fullText = tokens.map((token) => token.text).join('')

const root = ref(null)
const typed = ref(0)
const done = computed(() => typed.value >= total)
const visibleText = (token) => token.text.slice(0, Math.max(0, typed.value - token.start))

let timer = 0
let delay = 0
let observer
const startTyping = () => {
  timer = setInterval(() => {
    typed.value += 1
    if (typed.value >= total) clearInterval(timer)
  }, 20)
}

onMounted(() => {
  // "Reduce motion" (a system setting): show the finished code right away
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typed.value = total
    return
  }
  // Start typing once the window is on screen (on phones it is below the intro)
  observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    observer.disconnect()
    delay = setTimeout(startTyping, 400)
  }, { threshold: 0.3 })
  observer.observe(root.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  clearTimeout(delay)
  clearInterval(timer)
})
</script>
