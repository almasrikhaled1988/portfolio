<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{{ $t('projects.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in localizedProjects" :key="project.title" 
             class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rtl:text-right">
          <div class="h-48 overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover">
          </div>
          <div class="p-6 space-y-4">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full">
                {{ tech }}
              </span>
            </div>
            <div class="flex space-x-4 pt-4 rtl:space-x-reverse">
              <a :href="project.github" target="_blank" rel="noopener"
                 class="btn-secondary">
                {{ $t('projects.viewCode') }}
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
                 class="btn-primary">
                {{ $t('projects.liveDemo') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const localizedProjects = computed(() => [
  {
    title: t('projects.items.p1.title'),
    description: t('projects.items.p1.desc'),
    image: '/project1.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: t('projects.items.p2.title'),
    description: t('projects.items.p2.desc'),
    image: '/project2.jpg',
    technologies: ['React', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: t('projects.items.p3.title'),
    description: t('projects.items.p3.desc'),
    image: '/project3.jpg',
    technologies: ['TypeScript', 'AWS', 'Docker'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project2-demo.com'
  }
])
</script>
