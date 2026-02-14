<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-50 dark:bg-dark-900">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_50%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_50%)]" />
    </div>
    
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 800 }"
        class="text-center mb-16"
      >
        <span class="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full">
          {{ $t('contact.subtitle') || "Let's work together" }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {{ $t('contact.title') }}
          </span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ $t('contact.description') || 'Have a project in mind? Feel free to reach out. I am always open to discussing new opportunities.' }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <!-- Contact Info -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800, delay: 200 }"
          class="lg:col-span-2 space-y-6 rtl:text-right"
        >
          <!-- Info Cards -->
          <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 rtl:flex-row-reverse">
              <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center text-white">
                <ChatBubbleLeftRightIcon class="w-5 h-5" />
              </span>
              {{ $t('contact.info') }}
            </h3>
            
            <div class="space-y-4">
              <!-- Email -->
              <a 
                href="mailto:almasrikhaled1988@gmail.com" 
                class="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 rtl:flex-row-reverse"
              >
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon class="w-6 h-6" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('contact.emailLabel') || 'Email' }}</p>
                  <p class="text-slate-700 dark:text-slate-200 font-medium truncate">almasrikhaled1988@gmail.com</p>
                </div>
                <ArrowTopRightOnSquareIcon class="w-5 h-5 text-slate-400 group-hover:text-primary-500 transition-colors duration-300" />
              </a>

              <!-- Location -->
              <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rtl:flex-row-reverse">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white">
                  <MapPinIcon class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('contact.locationLabel') || 'Location' }}</p>
                  <p class="text-slate-700 dark:text-slate-200 font-medium">{{ $t('contact.location') || 'Austria' }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
            <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">{{ $t('contact.connect') || 'Connect with me' }}</h4>
            <div class="flex gap-3 rtl:flex-row-reverse">
              <a
                href="https://github.com/khaled1988xaxaxa"
                target="_blank"
                rel="noopener"
                class="group flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 dark:hover:bg-white transition-all duration-300"
              >
                <svg class="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-white dark:group-hover:text-slate-900 transition-colors duration-300 hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/khaled-almasri-8a8b273a5/"
                target="_blank"
                rel="noopener"
                class="group flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] transition-all duration-300 border border-[#0A66C2]/20"
              >
                <svg class="w-5 h-5 text-[#0A66C2] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span class="text-sm font-medium text-[#0A66C2] group-hover:text-white transition-colors duration-300 hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-200/30 dark:border-emerald-500/20">
            <div class="flex items-center gap-3 rtl:flex-row-reverse">
              <div class="relative">
                <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div class="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div>
                <p class="font-semibold text-emerald-800 dark:text-emerald-300">{{ $t('contact.availableNow') || 'Available for freelance' }}</p>
                <p class="text-sm text-emerald-600 dark:text-emerald-400">{{ $t('contact.responseTime') || 'Usually responds within 24 hours' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800, delay: 400 }"
          class="lg:col-span-3"
        >
          <form @submit.prevent="handleSubmit" class="p-8 rounded-3xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark rtl:text-right">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <!-- Name -->
              <div class="relative">
                <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {{ $t('contact.form.name') }}
                </label>
                <div class="relative">
                  <UserIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rtl:left-auto rtl:right-4" />
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full pl-12 rtl:pl-4 rtl:pr-12 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
                    :placeholder="$t('contact.form.namePlaceholder') || 'Your name'"
                  >
                </div>
              </div>

              <!-- Email -->
              <div class="relative">
                <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  {{ $t('contact.form.email') }}
                </label>
                <div class="relative">
                  <EnvelopeIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rtl:left-auto rtl:right-4" />
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full pl-12 rtl:pl-4 rtl:pr-12 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
                    :placeholder="$t('contact.form.emailPlaceholder') || 'your@email.com'"
                  >
                </div>
              </div>
            </div>

            <!-- Subject -->
            <div class="relative mb-6">
              <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {{ $t('contact.form.subject') || 'Subject' }}
              </label>
              <div class="relative">
                <DocumentTextIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 rtl:left-auto rtl:right-4" />
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full pl-12 rtl:pl-4 rtl:pr-12 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none"
                  :placeholder="$t('contact.form.subjectPlaceholder') || 'Project inquiry'"
                >
              </div>
            </div>

            <!-- Message -->
            <div class="relative mb-8">
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                {{ $t('contact.form.message') }}
              </label>
              <div class="relative">
                <ChatBubbleBottomCenterTextIcon class="absolute left-4 top-4 w-5 h-5 text-slate-400 rtl:left-auto rtl:right-4" />
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full pl-12 rtl:pl-4 rtl:pr-12 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 outline-none resize-none"
                  :placeholder="$t('contact.form.messagePlaceholder') || 'Tell me about your project...'"
                />
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="group relative w-full py-4 px-6 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <span class="absolute inset-0 bg-gradient-to-r from-primary-600 to-violet-600 transition-transform duration-300 group-hover:scale-105" />
              <span class="relative flex items-center justify-center gap-2 text-white font-semibold text-lg">
                <span v-if="isSubmitting" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <PaperAirplaneIcon v-else class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                {{ isSubmitting ? $t('contact.form.sending') || 'Sending...' : $t('contact.form.send') }}
              </span>
            </button>

            <!-- Success/Error Message -->
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-4"
            >
              <div
                v-if="message"
                :class="[
                  'mt-6 p-4 rounded-xl flex items-center gap-3 rtl:flex-row-reverse',
                  message.type === 'success' 
                    ? 'bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300'
                    : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-300'
                ]"
              >
                <CheckCircleIcon v-if="message.type === 'success'" class="w-5 h-5 flex-shrink-0" />
                <XCircleIcon v-else class="w-5 h-5 flex-shrink-0" />
                <p class="text-sm">{{ message.text }}</p>
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  EnvelopeIcon, 
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ArrowTopRightOnSquareIcon,
  UserIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/vue/24/outline'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const message = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  message.value = null
  
  try {
    await emailjs.send(
      'service_zarud3j',
      'template_dmnf4q3',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      },
      'Yq2xjkZCwgHBcNII5'
    )
    
    message.value = {
      type: 'success',
      text: t('contact.form.success')
    }
    
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      message.value = null
    }, 5000)
  } catch (error) {
    console.error('Error sending message:', error)
    message.value = {
      type: 'error',
      text: t('contact.form.fail')
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
