// Khaled's data that is the same in every language: links, skill levels, projects, experience tags.
// The texts (names, descriptions, labels) are translated in src/locales/en.json, de.json and ar.json.
import {
  siArduino, siAutocad, siExpress, siGit, siHtml5, siJavascript, siMongodb, siNodedotjs,
  siOpenjdk, siPython, siTailwindcss, siTypescript, siVuedotjs,
} from 'simple-icons'
import {
  AdjustmentsHorizontalIcon, BoltIcon, ChatBubbleLeftRightIcon, CircleStackIcon, CodeBracketSquareIcon, Cog6ToothIcon,
  CommandLineIcon, CpuChipIcon, DocumentChartBarIcon, FireIcon, SparklesIcon, WrenchScrewdriverIcon,
} from '@heroicons/vue/24/outline'

export const links = {
  email: 'almasrikhaled1988@gmail.com',
  github: 'https://github.com/almasrikhaled1988',
  githubUser: 'almasrikhaled1988',
  linkedin: 'https://www.linkedin.com/in/khaled-almasri-8a8b273a5/',
  cv: '/CV Khaled almasri.pdf',
  rispulse: 'https://rispulse.khaledalmasri.eu',
}

// Small tech labels under the hero text
export const heroStack = ['Vue.js', 'Node.js', 'JavaScript', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS', 'AI / RAG', 'Git & GitHub']

// The code the hero window "types". Each part is [text, color]; one inner array per line.
export const heroCode = [
  [['const', 'keyword'], [' ', ''], ['developer', 'name'], [' = {', 'punct']],
  [['  name', 'key'], [': ', 'punct'], ['"Khaled Almasri"', 'string'], [',', 'punct']],
  [['  location', 'key'], [': ', 'punct'], ['"Vienna, Austria"', 'string'], [',', 'punct']],
  [['  role', 'key'], [': ', 'punct'], ['"Full-Stack Developer"', 'string'], [',', 'punct']],
  [['  stack', 'key'], [': [', 'punct'], ['"Vue"', 'string'], [', ', 'punct'], ['"Node.js"', 'string'], [', ', 'punct'], ['"MongoDB"', 'string'], ['],', 'punct']],
  [['  background', 'key'], [': ', 'punct'], ['"Mechatronics"', 'string'], [',', 'punct']],
  [['  hardWorker', 'key'], [': ', 'punct'], ['true', 'boolean']],
  [['};', 'punct']],
]

// Skills section. "level" (0-100) is the ring around each skill: my estimate, change it to what fits you.
// "brand" is a logo from simple-icons, "icon" a general icon for skills without a logo.
export const skillGroups = [
  {
    id: 'software',
    icon: CodeBracketSquareIcon,
    skills: [
      { key: 'vue', level: 90, brand: siVuedotjs },
      { key: 'js', level: 90, brand: siJavascript },
      { key: 'ts', level: 70, brand: siTypescript },
      { key: 'node', level: 85, brand: siNodedotjs },
      { key: 'express', level: 80, brand: siExpress },
      { key: 'mongodb', level: 80, brand: siMongodb },
      { key: 'tailwind', level: 90, brand: siTailwindcss },
      { key: 'html', level: 95, brand: siHtml5 },
      { key: 'git', level: 85, brand: siGit },
      { key: 'python', level: 60, brand: siPython },
      { key: 'java', level: 55, brand: siOpenjdk },
    ],
  },
  {
    id: 'ai',
    icon: SparklesIcon,
    skills: [
      { key: 'ai', level: 80, icon: SparklesIcon },
      { key: 'aiDev', level: 90, icon: CommandLineIcon },
      { key: 'rag', level: 75, icon: CircleStackIcon },
      { key: 'prompt', level: 85, icon: ChatBubbleLeftRightIcon },
    ],
  },
  {
    id: 'hardware',
    icon: CpuChipIcon,
    skills: [
      { key: 'mechatronics', level: 90, icon: Cog6ToothIcon },
      { key: 'sps', level: 80, icon: AdjustmentsHorizontalIcon },
      { key: 'eplan', level: 75, icon: DocumentChartBarIcon },
      { key: 'electronics', level: 95, icon: WrenchScrewdriverIcon },
      { key: 'circuit', level: 90, icon: CpuChipIcon },
      { key: 'soldering', level: 95, icon: FireIcon },
      { key: 'embedded', level: 65, icon: BoltIcon },
      { key: 'autocad', level: 70, brand: siAutocad },
      { key: 'arduino', level: 75, brand: siArduino },
    ],
  },
]

// Projects, in the order they are shown. Title and description: projects.items.<id> in the language files.
// category: one of projects.categories (ai, education, ecommerce, game, webapp).
export const projects = [
  {
    id: 'p4',
    category: 'ai',
    image: '/rispulse.webp',
    imageSize: [800, 393],
    tech: ['Vue.js', 'Node.js', 'AI / RAG', 'MongoDB'],
    demo: 'https://rispulse.khaledalmasri.eu',
    github: null,
  },
  {
    id: 'p5',
    category: 'education',
    image: '/lernheld.webp',
    imageSize: [800, 348],
    tech: ['Vue.js', 'Node.js', 'MongoDB', 'Gamification'],
    demo: 'https://lernheld.khaledalmasri.eu',
    github: null,
  },
  {
    id: 'p1',
    category: 'ecommerce',
    image: '/techwave-shop.webp',
    imageSize: [800, 397],
    tech: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    demo: 'https://shop.khaledalmasri.eu',
    github: null, // no public repository for this project
  },
  {
    id: 'p2',
    category: 'game',
    image: '/pokemon-game.webp',
    imageSize: [800, 800],
    tech: ['Vue.js', 'Pinia', 'Tailwind CSS', 'Socket.io'],
    demo: 'https://pokegame.khaledalmasri.eu',
    github: 'https://github.com/almasrikhaled1988/pokemonCardgame',
  },
  {
    id: 'p3',
    category: 'webapp',
    image: '/pokedex-universe.webp',
    imageSize: [800, 800],
    tech: ['Vue.js', 'PokéAPI', 'Chart.js'],
    demo: 'https://pokedex.khaledalmasri.eu',
    github: 'https://github.com/almasrikhaled1988/pokemon-website',
  },
]

// Experience timeline, newest first. Texts: experience.items.<id> in the language files.
export const experience = [
  { id: 'e1', tags: ['Vue.js', 'Node.js', 'MongoDB', 'AI'] },
  { id: 'e2', tags: ['Automation', 'SPS / TIA Portal', 'EPLAN'] },
  { id: 'e3', tags: ['Electronics', 'Soldering', 'Diagnostics'] },
  { id: 'e4', tags: ['Electrical', 'Industrial', 'Railway'] },
  { id: 'e5', tags: ['Business', 'Repair', 'Sales'] },
]

export const spokenLanguages = ['arabic', 'german', 'english']
export const certifications = ['ecdl', 'mechatronics', 'sps', 'eplan', 'autocad', 'arduino']
