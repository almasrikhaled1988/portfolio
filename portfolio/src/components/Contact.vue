<template>
  <section id="contact" class="section-bg relative py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <SectionHeading :icon="EnvelopeIcon" :badge="CodeBracketIcon" :title="$t('contact.title')" :subtitle="$t('contact.subtitle')" />

      <div class="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12">
        <!-- Direct contact -->
        <div v-motion :initial="{ opacity: 0, y: 32 }" :visible-once="{ opacity: 1, y: 0 }" :duration="700" class="card self-start p-6 sm:p-8">
          <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-50">
            <span class="h-7 w-1 rounded-full bg-primary" aria-hidden="true" />
            {{ $t('contact.getInTouch') }}
          </h3>
          <ul class="mt-8 space-y-4">
            <li v-for="item in items" :key="item.key">
              <component
                :is="item.href ? 'a' : 'div'"
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener' : undefined"
                :download="item.download ? '' : undefined"
                class="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] p-4 transition"
                :class="item.href ? 'hover:border-primary/30 hover:bg-white/[0.06]' : ''"
              >
                <span class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BrandIcon v-if="item.brand" :name="item.brand" class="h-5 w-5" />
                  <component :is="item.icon" v-else class="h-5 w-5" aria-hidden="true" />
                </span>
                <span class="min-w-0">
                  <span class="block text-sm text-slate-400">{{ item.label }}</span>
                  <!-- <wbr>: on narrow phones the address wraps before the @, not in the middle of a word -->
                  <span v-if="item.key === 'email'" class="block break-words font-medium text-slate-50" dir="ltr">{{ emailParts[0] }}<wbr>@{{ emailParts[1] }}</span>
                  <span v-else class="block break-words font-medium text-slate-50" :dir="item.ltr ? 'ltr' : undefined">{{ item.value }}</span>
                </span>
              </component>
            </li>
          </ul>
        </div>

        <!-- Message form (sent with EmailJS) -->
        <form
          v-motion
          :initial="{ opacity: 0, y: 32 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="100"
          :duration="700"
          class="card border-primary/20 p-6 sm:p-10"
          @submit.prevent="handleSubmit"
        >
          <h3 class="text-2xl font-bold text-slate-50">{{ $t('contact.sendMessage') }}</h3>
          <div class="mt-8 space-y-5">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm text-slate-300">{{ $t('contact.form.name') }}</span>
                <input v-model="form.name" type="text" required autocomplete="name" class="field" :placeholder="$t('contact.form.namePlaceholder')">
              </label>
              <label class="block">
                <span class="mb-2 block text-sm text-slate-300">{{ $t('contact.form.email') }}</span>
                <input v-model="form.email" type="email" required autocomplete="email" class="field" :placeholder="$t('contact.form.emailPlaceholder')">
              </label>
            </div>
            <label class="block">
              <span class="mb-2 block text-sm text-slate-300">{{ $t('contact.form.subject') }}</span>
              <input v-model="form.subject" type="text" required class="field" :placeholder="$t('contact.form.subjectPlaceholder')">
            </label>
            <label class="block">
              <span class="mb-2 block text-sm text-slate-300">{{ $t('contact.form.message') }}</span>
              <textarea v-model="form.message" rows="6" required class="field resize-none" :placeholder="$t('contact.form.messagePlaceholder')" />
            </label>

            <!-- Honeypot: hidden from visitors, spam bots tend to fill it -->
            <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="hidden">

            <button type="submit" :disabled="isSubmitting" class="btn-gradient w-full py-4">
              <span v-if="isSubmitting" class="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
              <PaperAirplaneIcon v-else class="h-5 w-5 rtl:-scale-x-100" aria-hidden="true" />
              {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
            </button>

            <p
              v-if="message"
              role="status"
              aria-live="polite"
              class="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm"
              :class="message.type === 'success' ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' : 'border-red-400/30 bg-red-400/10 text-red-200'"
            >
              <CheckCircleIcon v-if="message.type === 'success'" class="h-5 w-5 shrink-0" aria-hidden="true" />
              <XCircleIcon v-else class="h-5 w-5 shrink-0" aria-hidden="true" />
              {{ message.text }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  CheckCircleIcon, CodeBracketIcon, DocumentArrowDownIcon, EnvelopeIcon, MapPinIcon, PaperAirplaneIcon, XCircleIcon
} from '@heroicons/vue/24/outline'
import emailjs from '@emailjs/browser'
import SectionHeading from './SectionHeading.vue'
import BrandIcon from './BrandIcon.vue'
import { links } from '../data/profile'

const { t } = useI18n()
const emailParts = links.email.split('@')

const items = computed(() => [
  { key: 'email', icon: EnvelopeIcon, label: t('contact.email'), value: links.email, href: `mailto:${links.email}`, ltr: true },
  { key: 'github', brand: 'github', label: t('contact.github'), value: `@${links.githubUser}`, href: links.github, external: true, ltr: true },
  { key: 'linkedin', brand: 'linkedin', label: t('contact.linkedin'), value: t('contact.linkedinValue'), href: links.linkedin, external: true },
  { key: 'cv', icon: DocumentArrowDownIcon, label: t('contact.cv'), value: t('contact.cvValue'), href: links.cv, download: true },
  { key: 'location', icon: MapPinIcon, label: t('contact.location'), value: t('contact.locationValue') }
])

const emptyForm = () => ({ name: '', email: '', subject: '', message: '', website: '' }) // website = honeypot
const form = ref(emptyForm())
const isSubmitting = ref(false)
const message = ref(null)

const handleSubmit = async () => {
  // Only bots fill the hidden "website" field: drop the request silently
  if (form.value.website) {
    form.value = emptyForm()
    return
  }
  isSubmitting.value = true
  message.value = null
  try {
    await emailjs.send(
      'service_zarud3j',
      'template_dmnf4q3',
      { from_name: form.value.name, from_email: form.value.email, subject: form.value.subject, message: form.value.message },
      // Spam protection built into the EmailJS SDK
      { publicKey: 'Yq2xjkZCwgHBcNII5', blockHeadless: true, limitRate: { id: 'contact-form', throttle: 10000 } }
    )
    message.value = { type: 'success', text: t('contact.form.success') }
    form.value = emptyForm()
    setTimeout(() => { message.value = null }, 6000)
  } catch (error) {
    console.error('Error sending message:', error)
    message.value = { type: 'error', text: t('contact.form.fail') }
  } finally {
    isSubmitting.value = false
  }
}
</script>
