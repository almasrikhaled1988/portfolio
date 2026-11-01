<template>
  <TransitionRoot appear :show="!!project" as="template">
    <Dialog as="div" class="relative z-[60]" @close="emit('close')">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-night-0/80 backdrop-blur-sm" aria-hidden="true" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 sm:p-6">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="translate-y-4 scale-95 opacity-0"
            enter-to="translate-y-0 scale-100 opacity-100"
            leave="duration-200 ease-in"
            leave-from="scale-100 opacity-100"
            leave-to="scale-95 opacity-0"
          >
            <DialogPanel v-if="current" class="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-night-1 text-start shadow-2xl shadow-black/60">
              <button
                type="button"
                class="absolute end-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-night-0/80 text-slate-200 backdrop-blur transition hover:bg-night-0 hover:text-white"
                @click="emit('close')"
              >
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                <span class="sr-only">{{ $t('projects.close') }}</span>
              </button>

              <!-- Screenshot: shown whole, on a blurred copy of itself -->
              <div class="relative h-56 overflow-hidden bg-night-0 sm:h-72 md:h-[340px]">
                <img :src="current.image" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl">
                <img :src="current.image" :alt="title" class="relative mx-auto h-full w-auto max-w-full object-contain">
                <div class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-night-1 to-transparent" aria-hidden="true" />
              </div>

              <div class="p-6 sm:p-8">
                <div class="flex flex-wrap items-center gap-3">
                  <DialogTitle as="h3" class="text-3xl font-bold text-slate-50">{{ title }}</DialogTitle>
                  <span class="tag px-3 py-1 text-sm">{{ category }}</span>
                </div>

                <div class="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  <div>
                    <h4 class="bar-title text-lg">{{ $t('projects.description') }}</h4>
                    <p class="mt-4 text-lg leading-relaxed text-slate-400">{{ $t(`projects.items.${current.id}.desc`) }}</p>
                    <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                      <a :href="current.demo" target="_blank" rel="noopener" class="btn-gradient flex-1">
                        <GlobeAltIcon class="h-5 w-5" aria-hidden="true" />
                        {{ $t('projects.livePreview') }}
                      </a>
                      <a v-if="current.github" :href="current.github" target="_blank" rel="noopener" class="btn-dark flex-1">
                        <BrandIcon name="github" class="h-5 w-5" />
                        {{ $t('projects.viewSource') }}
                      </a>
                    </div>
                  </div>

                  <div class="space-y-6">
                    <div>
                      <h4 class="flex items-center gap-2 text-lg font-bold text-slate-50">
                        <CodeBracketIcon class="h-5 w-5 text-primary" aria-hidden="true" />
                        {{ $t('projects.technologies') }}
                      </h4>
                      <ul class="mt-4 flex flex-wrap gap-2">
                        <li v-for="tech in current.tech" :key="tech" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">{{ tech }}</li>
                      </ul>
                    </div>
                    <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{{ $t('projects.info') }}</p>
                      <dl class="mt-4 space-y-4 text-sm">
                        <div v-for="row in infoRows" :key="row.label" class="relative ps-8">
                          <dt class="text-xs uppercase tracking-wider text-slate-500">
                            <component :is="row.icon" class="absolute start-0 top-1.5 h-5 w-5" :class="row.color" aria-hidden="true" />
                            {{ $t(row.label) }}
                          </dt>
                          <dd class="font-semibold text-slate-100">{{ row.value }}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { CodeBracketIcon, CodeBracketSquareIcon, GlobeAltIcon, SignalIcon, Square3Stack3DIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import BrandIcon from './BrandIcon.vue'

const props = defineProps({ project: { type: Object, default: null } })
const emit = defineEmits(['close'])
const { t } = useI18n()

// Keep showing the last project while the window fades out (the parent already set "project" back to null)
const current = ref(null)
watch(() => props.project, (project) => { if (project) current.value = project }, { immediate: true })

const title = computed(() => (current.value ? t(`projects.items.${current.value.id}.title`) : ''))
const category = computed(() => (current.value ? t(`projects.categories.${current.value.category}`) : ''))
const infoRows = computed(() => [
  { label: 'projects.type', value: category.value, icon: Square3Stack3DIcon, color: 'text-amber-400' },
  { label: 'projects.status', value: t('projects.live'), icon: SignalIcon, color: 'text-emerald-400' },
  { label: 'projects.source', value: current.value?.github ? t('projects.openSource') : t('projects.private'), icon: CodeBracketSquareIcon, color: 'text-primary' }
])
</script>
