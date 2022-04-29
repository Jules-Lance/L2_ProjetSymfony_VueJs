<script setup>
import Axios from '../api/axios'
import { ref } from 'vue'
import planning from './planning.vue'
import { useDefaultStore } from '../stores/index'

const store = useDefaultStore()
Axios()

const nombrePlace = ref(1)
const dateArrivee = ref('')
const dateDepart = ref('')
const retour = ref([])

function chargeDonnees() {

  if(dateArrivee.value == '' || dateDepart.value == '') return

  Axios().get('/pre_reservation?dateArrivee=' + dateArrivee.value + '&dateDepart=' + dateDepart.value + '&nombrePlace=' + nombrePlace.value)
      .then(response => retour.value = response.data)
      .then(store.dates = {'dateArrivee': dateArrivee,'dateDepart': dateDepart})

}

</script>

<template>


  <div>
    <form>
      <fieldset>
        <label id="dateArrive">Date d'arrivée</label>
        <input type="date" v-model="dateArrivee" @change="chargeDonnees">
        <label id="dateDepart">Date de départ</label>
        <input type="date" v-model="dateDepart" @change="chargeDonnees">
        <label id="nombrePlace">Nombre de Place</label>
        <input type="number" v-model="nombrePlace" max="10" min="1" @change="chargeDonnees">
      </fieldset>
      <h2 v-if="retour.prix">Prix : {{ retour.prix}}</h2>
    </form>
    <div v-if="retour.prix">
      <planning/>
    </div>
  </div>

</template>

<style>

fieldset{
  display: flex;
  flex-direction: column;
}

div{
  display: flex;
  flex-direction: row;
}

</style>