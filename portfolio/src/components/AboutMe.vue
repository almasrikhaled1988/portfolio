<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{{ $t('about.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 rtl:text-right">
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ $t('about.description1') }}
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ $t('about.description2') }}
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            {{ $t('about.description3') }}
          </p>

          <div class="pt-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{{ $t('about.educationTitle') }}</h3>
            <ul class="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                • <strong>{{ $t('about.edu1Title') }}</strong><br>
                {{ $t('about.edu1Sub') }}  
                <br>
                <span class="text-sm">
                  {{ $t('about.edu1Desc') }}
                </span>
              </li>

              <li>
                • <strong>{{ $t('about.edu2Title') }}</strong><br>
                {{ $t('about.edu2Sub') }}  
                <br>
                <span class="text-sm">
                  {{ $t('about.edu2Desc') }}
                </span>
              </li>

              <li>
                • <strong>{{ $t('about.edu3Title') }}</strong><br>
                <span class="text-sm">
                  {{ $t('about.edu3Desc') }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative">
          <div class="w-full h-[600px] md:h-[800px] bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
            <img
              src="../assets/DSC04177_CV.jpg"
              alt="Professional photo"
              class="w-full h-full object-cover rounded-lg"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>
