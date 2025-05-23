<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Skills</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div v-for="skill in technicalSkills" :key="skill.name" 
                 class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center space-x-3">
                <component :is="skill.icon" class="w-6 h-6 text-blue-600"/>
                <span class="text-gray-800 dark:text-gray-200">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Soft Skills</h3>
          <div class="space-y-4">
            <div v-for="skill in softSkills" :key="skill" 
                 class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <span class="text-gray-800 dark:text-gray-200">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  CodeBracketIcon, 
  CommandLineIcon,
  CubeIcon,
  ServerIcon
} from '@heroicons/vue/24/outline'

const technicalSkills = [
  { name: 'JavaScript/TypeScript', icon: CodeBracketIcon },
  { name: 'Vue.js', icon: CommandLineIcon },
  { name: 'HTML/CSS', icon: CodeBracketIcon },
  { name: 'Node.js', icon: ServerIcon },
  { name: 'Git', icon: CommandLineIcon },
  { name: 'REST APIs', icon: CubeIcon },
]

const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
  'Critical Thinking'
]
</script>
