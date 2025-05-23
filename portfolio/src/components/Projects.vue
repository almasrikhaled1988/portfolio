<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.title" 
             class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
            <div class="flex space-x-4 pt-4">
              <a :href="project.github" target="_blank" rel="noopener"
                 class="btn-secondary">
                View Code
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener"
                 class="btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and its key features.',
    image: '/project1.jpg', // Add your project screenshot
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project highlighting its unique aspects.',
    image: '/project2.jpg',
    technologies: ['React', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'Project 3',
    description: 'Overview of your third project and its main functionalities.',
    image: '/project3.jpg',
    technologies: ['TypeScript', 'AWS', 'Docker'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  }
]
</script>
