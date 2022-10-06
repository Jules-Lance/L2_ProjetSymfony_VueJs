import { defineStore } from 'pinia'
import Axios from '../api/axios'

Axios()

// les clés api openweathermap ont été supprimé
// l'api pour Symfony est maintenant sécurisé donc inaccessible

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
    cle: 'xxxxx',
    urlMeteo:'https://api.openweathermap.org/data/2.5/onecall?lat=49.46&lon=2.11&lang=fr&units=metric&exclude=hourly,minutely&appid=xxxxx',
    urlSymfony:'https://dev.parking-rue-du-moulin.fr/recup/public/api_reservation'
  }),
  getters: {
    
  },
  actions: {

  }
})
