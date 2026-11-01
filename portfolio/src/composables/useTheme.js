import { ref, watch } from 'vue'

// The six color themes. The colors themselves are CSS variables in style.css ([data-theme='...']);
// "swatch" is only the dot shown in the theme menu.
export const THEMES = [
  { id: 'ocean', swatch: '#38bdf8' },
  { id: 'gold', swatch: '#fbbf24' },
  { id: 'green', swatch: '#34d399' },
  { id: 'silver', swatch: '#cbd5e1' },
  { id: 'purple', swatch: '#c084fc' },
  { id: 'red', swatch: '#fb7185' },
]

function savedTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (THEMES.some((theme) => theme.id === saved)) return saved
  } catch (e) {
    // localStorage can be blocked (private mode, strict privacy settings)
  }
  return 'ocean'
}

// One shared value for the whole page (index.html already applied it before the first paint)
const theme = ref(savedTheme())

watch(theme, (id) => {
  document.documentElement.dataset.theme = id
  try {
    localStorage.setItem('theme', id)
  } catch (e) {
    // not saved, but the theme still changes for this visit
  }
})

export function useTheme() {
  return { theme, themes: THEMES }
}
