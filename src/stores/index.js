import { defineStore } from 'pinia'
import Axios from '../api/axios'

Axios()

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    "store" : [],
  }),
  getters: {
    
  },
  actions: {
    loadData() {
      Axios().get('/clients')
      .then(response => this.store = response.data['hydra:member'])
    }    
  }
})
