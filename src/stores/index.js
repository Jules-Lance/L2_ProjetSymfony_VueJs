import { defineStore } from 'pinia'
import Axios from '../api/axios'

Axios()

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    cle: '42e64c169a6559af5eccf2b3dcf2dcdb',
    urlMeteo:'https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=',
    urlSymfony:'https://dev.parking-rue-du-moulin.fr/recup/public/api_reservation'
  }),
  getters: {
    
  },
  actions: {

  }
})
