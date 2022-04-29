import { defineStore } from 'pinia'
import Axios from '../api/axios'

Axios()

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    "dates" : [],
  }),
  getters: {
    
  },
  actions: {

  }
})
