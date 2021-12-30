import { h, Component, resolveComponent } from 'vue'

export const useIcon = (icon: Component, size = 16, color = '#333') => {
  return () => h(resolveComponent('n-icon'), {
    size, color
  }, { default: () => h(icon) })
}