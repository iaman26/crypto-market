import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: (): any => ({
    item: [],
    isSideBar: false,
    isModal: false,
    isAccount: {},
  }),

  actions: {
    setIsSideBar(value: boolean) {
      this.isSideBar = value
    },
    setIsModal(value: boolean) {
      this.isModal = value
    },
    setAccount(value: string) {
      this.isAccount = value
    }
  },
})
