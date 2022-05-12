<script setup>
import Axios from '../api/axios'
import { ref, onMounted } from 'vue'
import planning from './planning.vue'
import moment from 'moment'
import { useDefaultStore } from '../stores/index'


const store = useDefaultStore()
const nombrePlace = ref(1)
const dateArrivee = ref(moment().add(1, 'days').format("yyyy-MM-DD"))
const dateDepart = ref(moment().add(14, 'days').format("yyyy-MM-DD"))
const retour = ref([])
const dates = ref({})

onMounted(() => {
    chargeDonnees()
})

function chargeDonnees() {

  if(dateArrivee.value == '' || dateDepart.value == '') return

    Axios().get(store.urlSymfony + '/pre_reservation?dateArrivee=' + dateArrivee.value + '&dateDepart=' + dateDepart.value + '&nombrePlace=' + nombrePlace.value)
      .then(response => retour.value = response.data)

  dates.value = {'dateArrivee': dateArrivee,'dateDepart': dateDepart}
}

</script>

<template>

  <div>
    <form>
      <fieldset>
        <div>
        <label id="dateArrive">Date d'arrivée</label>
        <input type="date" v-model="dateArrivee" @change="chargeDonnees">
        <label id="dateDepart">Date de départ</label>
        <input type="date" v-model="dateDepart" @change="chargeDonnees">
        <label id="nombrePlace">Nombre de Place</label>
        <input type="number" v-model="nombrePlace" max="10" min="1" @change="chargeDonnees">
        </div>
      </fieldset>
      <h2 v-if="retour.prix">Prix : {{ retour.prix }}</h2>
    </form>
  </div>
  <div v-if="retour.prix">
      <planning v-bind:dates="dates"/>
  </div>

</template>

<style scoped>

fieldset{
  display: flex;
  flex-direction: column;
}

fieldset div{
  padding: 1rem;
}

div{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>