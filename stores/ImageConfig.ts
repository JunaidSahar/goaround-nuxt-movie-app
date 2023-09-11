import { defineStore } from 'pinia'

export const useImageConfig = defineStore('config', {
  state: () => {
    return {
      config: Object({}),
      failedRefreshAttempts: 0,
      paymentDetails: Object({})
    }
  },
  persist: true
})