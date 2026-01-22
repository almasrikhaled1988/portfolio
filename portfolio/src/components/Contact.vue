<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{{ $t('contact.title') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="space-y-6 rtl:text-right">
          <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">{{ $t('contact.info') }}</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
              <EnvelopeIcon class="w-6 h-6 text-blue-600" />
              <a href="mailto:almasrikhaled1988@gmail.com" class="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                almasrikhaled1988@gmail.com
              </a>
            </div>
            
            <div class="flex space-x-4 rtl:space-x-reverse">
              <a href="https://github.com/almasrikhaled1988" target="_blank" rel="noopener"
                 class="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <img src="/github-icon.svg" alt="GitHub" class="w-6 h-6">
              </a>
              <a href="https://www.linkedin.com/in/khaled-almasri-8a8b273a5/" target="_blank" rel="noopener"
                 class="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <img src="/linkedin-icon.svg" alt="LinkedIn" class="w-6 h-6">
              </a>
            </div>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6 rtl:text-right">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('contact.form.name') }}</label>
            <input type="text" id="name" v-model="form.name" required
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white">
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('contact.form.email') }}</label>
            <input type="email" id="email" v-model="form.email" required
                   class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white">
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">{{ $t('contact.form.message') }}</label>
            <textarea id="message" v-model="form.message" rows="4" required
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"></textarea>
          </div>

          <button type="submit" 
                  class="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
            {{ $t('contact.form.send') }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import emailjs from '@emailjs/browser'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  try {
    await emailjs.send(
      'service_zarud3j',
      'template_dmnf4q3',
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      },
      'Yq2xjkZCwgHBcNII5'
    )
    
    alert(t('contact.form.success'))
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    console.error('Error sending message:', error)
    alert(t('contact.form.fail'))
  }
}
</script>
