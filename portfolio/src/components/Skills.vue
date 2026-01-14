<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">{{ $t('skills.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="rtl:text-right">
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{{ $t('skills.technical') }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div v-for="skill in technicalSkills" :key="skill.key" 
                 class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <component :is="skill.icon" class="w-6 h-6 text-blue-600"/>
                <span class="text-gray-800 dark:text-gray-200">{{ $t(`skills.items.${skill.key}`) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="rtl:text-right">
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{{ $t('skills.soft') }}</h3>
          <div class="space-y-4">
            <div v-for="skillKey in softSkills" :key="skillKey" 
                 class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <span class="text-gray-800 dark:text-gray-200">{{ $t(`skills.items.${skillKey}`) }}</span>
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
  ServerIcon,
  CpuChipIcon,
  SparklesIcon,
  CircleStackIcon,
  CogIcon,
  WrenchScrewdriverIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'


const technicalSkills = [
  // Software
  { key: 'js', icon: CodeBracketIcon },
  { key: 'vue', icon: CommandLineIcon },
  { key: 'node', icon: ServerIcon },
  { key: 'python', icon: CodeBracketIcon },
  { key: 'java', icon: CodeBracketIcon },


  // AI
  { key: 'ai', icon: CpuChipIcon },
  { key: 'aiDev', icon: SparklesIcon },

  // Hardware & Electronics
  { key: 'electronics', icon: WrenchScrewdriverIcon },
  { key: 'circuit', icon: BoltIcon },
  { key: 'soldering', icon: WrenchScrewdriverIcon },
  { key: 'embedded', icon: CpuChipIcon },
  { key: 'mechatronics', icon: CogIcon },
]



const softSkills = [
  'problemSolving',
  'collaboration',
  'communication',
  'timeManagement',
  'adaptability',
  'criticalThinking'
]
</script>
