import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return ({ user: {}})
  },
  actions: {
    setUserFromComponent(user) {
      console.log(user)
      this.user = user
    },
  },
})
