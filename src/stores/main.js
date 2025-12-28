// 示例主状态模块
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    user: null,
    loading: false,
    // 可以在这里添加更多状态
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    setUser(user) {
      this.user = user
    },
    
    setLoading(loading) {
      this.loading = loading
    },
    
    clearUser() {
      this.user = null
    }
  },
})