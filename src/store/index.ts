import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
  state: () => {
    return { 
      collapsed: false
    }
  },
  actions: {
    handleToggleCollapse() {
      this.collapsed = !this.collapsed
    },
  },
})