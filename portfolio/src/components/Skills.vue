<template>
  <section id="skills" class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-slate-50 dark:bg-dark-900">
      <!-- Animated gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -2s;" />
      <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-float" style="animation-delay: -4s;" />
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
          {{ $t('skills.subtitle') || 'What I can do' }}
        </span>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight">
          <span class="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            {{ $t('skills.title') }}
          </span>
        </h2>
      </div>

      <!-- Skills Categories Tabs -->
      <div 
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :transition="{ duration: 600, delay: 200 }"
        class="flex justify-center mb-12"
      >
        <div class="inline-flex p-1.5 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
          <button
            v-for="category in skillCategories"
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
            :class="activeCategory === category.id 
              ? 'bg-gradient-to-r from-primary-500 to-violet-500 text-white shadow-glow' 
              : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'
            "
          >
            {{ $t(category.label) }}
          </button>
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Technical Skills - Main Area -->
        <div 
          v-show="activeCategory === 'technical'"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 800, delay: 300 }"
          class="lg:col-span-8"
        >
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(skill, index) in technicalSkills"
              :key="skill.key"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 400, delay: 400 + (index * 50) }"
              class="group relative"
            >
              <div 
                class="relative p-5 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark transition-all duration-300 hover:-translate-y-2 hover:shadow-glow"
                :class="skill.featured ? 'ring-2 ring-primary-500/30' : ''"
              >
                <!-- Icon with glow effect -->
                <div 
                  class="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  :class="getSkillColor(skill.category)"
                >
                  <component :is="skill.icon" class="w-6 h-6 text-white" />
                </div>
                
                <!-- Skill name -->
                <h4 class="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  {{ $t(`skills.items.${skill.key}`) }}
                </h4>
                
                <!-- Category tag -->
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  {{ $t(`skills.categories.${skill.category}`) }}
                </span>

                <!-- Hover glow -->
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-violet-500/0 group-hover:from-primary-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>

        <!-- Soft Skills - Side Panel -->
        <div 
          v-show="activeCategory === 'soft'"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :transition="{ duration: 800, delay: 300 }"
          class="lg:col-span-8"
        >
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div
              v-for="(skill, index) in softSkills"
              :key="skill.key"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :visible="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 400, delay: 400 + (index * 50) }"
              class="group"
            >
              <div class="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 backdrop-blur-md border border-emerald-200/30 dark:border-emerald-500/20 shadow-glass dark:shadow-glass-dark transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                  <component :is="skill.icon" class="w-6 h-6 text-white" />
                </div>
                <h4 class="font-semibold text-slate-900 dark:text-white text-sm">
                  {{ $t(`skills.items.${skill.key}`) }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Panel -->
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0 }"
          :transition="{ duration: 800, delay: 500 }"
          class="lg:col-span-4 space-y-4"
        >
          <!-- Experience Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-primary-500/10 to-violet-500/10 dark:from-primary-500/20 dark:to-violet-500/20 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-violet-500 flex items-center justify-center">
                <BriefcaseIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="text-3xl font-bold text-slate-900 dark:text-white">3+</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('stats.years') || 'Years Experience' }}</p>
              </div>
            </div>
          </div>

          <!-- Projects Card -->
          <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <FolderIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="text-3xl font-bold text-slate-900 dark:text-white">10+</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('stats.projects') || 'Projects Completed' }}</p>
              </div>
            </div>
          </div>

          <!-- Technologies Card -->
          <div class="p-6 rounded-2xl bg-white/60 dark:bg-dark-800/60 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <StarIcon class="w-6 h-6 text-white" />
              </div>
              <div>
                <p class="text-3xl font-bold text-slate-900 dark:text-white">15+</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ $t('stats.technologies') || 'Technologies' }}</p>
              </div>
            </div>
          </div>

          <!-- Quick Info -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700">
            <h4 class="font-semibold text-slate-900 dark:text-white mb-3">{{ $t('skills.focus') || 'Current Focus' }}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                Vue.js 3
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                AI/ML
              </span>
              <span class="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                Full Stack
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
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
  BoltIcon,
  LightBulbIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  PuzzlePieceIcon,
  BriefcaseIcon,
  FolderIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

const activeCategory = ref('technical')

const skillCategories = [
  { id: 'technical', label: 'skills.technical' },
  { id: 'soft', label: 'skills.soft' }
]

const technicalSkills = [
  // Software
  { key: 'js', icon: CodeBracketIcon, category: 'software', featured: true },
  { key: 'vue', icon: CommandLineIcon, category: 'software', featured: true },
  { key: 'node', icon: ServerIcon, category: 'software' },
  { key: 'python', icon: CodeBracketIcon, category: 'software' },
  { key: 'java', icon: CodeBracketIcon, category: 'software' },
  // AI
  { key: 'ai', icon: CpuChipIcon, category: 'ai', featured: true },
  { key: 'aiDev', icon: SparklesIcon, category: 'ai' },
  // Hardware
  { key: 'electronics', icon: WrenchScrewdriverIcon, category: 'hardware' },
  { key: 'circuit', icon: BoltIcon, category: 'hardware' },
  { key: 'soldering', icon: CogIcon, category: 'hardware' },
  { key: 'embedded', icon: CpuChipIcon, category: 'hardware' },
  { key: 'mechatronics', icon: CircleStackIcon, category: 'hardware' },
]

const softSkills = [
  { key: 'problemSolving', icon: LightBulbIcon },
  { key: 'collaboration', icon: UsersIcon },
  { key: 'communication', icon: ChatBubbleLeftRightIcon },
  { key: 'timeManagement', icon: ClockIcon },
  { key: 'adaptability', icon: AdjustmentsHorizontalIcon },
  { key: 'criticalThinking', icon: PuzzlePieceIcon }
]

const getSkillColor = (category) => {
  const colors = {
    software: 'bg-gradient-to-br from-primary-500 to-blue-600',
    ai: 'bg-gradient-to-br from-violet-500 to-purple-600',
    hardware: 'bg-gradient-to-br from-amber-500 to-orange-500'
  }
  return colors[category] || 'bg-gradient-to-br from-slate-500 to-slate-600'
}
</script>
