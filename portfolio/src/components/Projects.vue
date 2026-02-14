<template>
  <section id="projects" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900" />
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/3 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
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
          {{ $t('projects.subtitle') || 'Featured Work' }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {{ $t('projects.title') }}
          </span>
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ $t('projects.description') || 'Here are some of my recent projects that showcase my skills and passion for development.' }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in localizedProjects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 600, delay: 200 + (index * 150) }"
          class="group relative"
        >
          <!-- Card -->
          <div class="relative h-full rounded-3xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-glow-lg">
            <!-- Image Container -->
            <div class="relative h-56 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <!-- Quick actions on hover -->
              <div class="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  :title="$t('projects.viewCode')"
                >
                  <CodeBracketIcon class="w-6 h-6" />
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener"
                  class="p-3 rounded-xl bg-gradient-to-r from-primary-500 to-violet-500 text-white hover:shadow-glow transition-all duration-300 hover:scale-110"
                  :title="$t('projects.liveDemo')"
                >
                  <EyeIcon class="w-6 h-6" />
                </a>
              </div>

              <!-- Featured badge -->
              <div v-if="project.featured" class="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-violet-500 text-white text-xs font-semibold shadow-glow">
                {{ $t('projects.featured') || 'Featured' }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 rtl:text-right">
              <div class="flex items-start justify-between gap-4 mb-3">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ project.title }}
                </h3>
              </div>
              
              <p class="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Tech stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 transition-colors duration-300 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Action buttons -->
              <div class="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-700 rtl:flex-row-reverse">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener"
                  class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-violet-500 text-white text-sm font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
                >
                  <EyeIcon class="w-4 h-4" />
                  {{ $t('projects.liveDemo') }}
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <CodeBracketIcon class="w-4 h-4" />
                  <span class="hidden sm:inline">{{ $t('projects.viewCode') }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All CTA -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 600, delay: 800 }"
        class="text-center mt-16"
      >
        <a 
          href="https://github.com/khaled1988xaxaxa" 
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
          </svg>
          {{ $t('projects.viewAll') || 'View All Projects on GitHub' }}
          <ArrowTopRightOnSquareIcon class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  CodeBracketIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/vue/24/outline'

const { t } = useI18n()

const localizedProjects = computed(() => [
  {
    id: 1,
    title: t('projects.items.p1.title'),
    description: t('projects.items.p1.desc'),
    image: '/techwave-shop.png',
    technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/khaled1988xaxaxa/techwave-shop',
    demo: 'https://shop.khaledalmasri.eu',
    featured: true
  },
  {
    id: 2,
    title: t('projects.items.p2.title'),
    description: t('projects.items.p2.desc'),
    image: '/pokemon-game.png',
    technologies: ['Vue.js', 'Pinia', 'TailwindCSS', 'Socket.io'],
    github: 'https://github.com/khaled1988xaxaxa/pokemon-card-game',
    demo: 'https://pokegame.khaledalmasri.eu',
    featured: false
  },
  {
    id: 3,
    title: t('projects.items.p3.title'),
    description: t('projects.items.p3.desc'),
    image: '/pokedex-universe.png',
    technologies: ['Vue.js', 'PokéAPI', 'Chart.js', 'CSS3'],
    github: 'https://github.com/khaled1988xaxaxa/pokedex-universe',
    demo: 'https://pokedex.khaledalmasri.eu',
    featured: false
  }
])
</script>
