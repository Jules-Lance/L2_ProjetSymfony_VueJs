<script setup>
import { useDefaultStore } from '../stores/index'
import { useRouter } from 'vue-router'
import Axios from '../api/axios'
import { ref } from 'vue'


Axios()

const router = useRouter()
const store = useDefaultStore()

const isLoading = ref(false)
const search = ref(null)
const clients = ref([])
const client = ref('')

function chargeDonnees() {
  if (client.value.length < 3 ) return

  if (isLoading.value) return

  isLoading.value = true

  /*Axios().get('clients?nom='+client.value)
      .then(response => clients.value = response.data['hydra:member'])
      .then(isLoading.value = false)
*/

}

</script>

<template>


  <div>
    <form>
      <fieldset>
        <label id="dateArrive">Date d'arrivée</label>
        <input type="date">
        <label id="dateDepart">Date de départ</label>
        <input type="date">
      </fieldset>
    </form>

    <div>
      <label for="ville-choice">Choisir un client:</label>
      <input list="villes-select" id="ville-choice" v-model="client" @input="chargeDonnees" />
      <datalist id="villes-select">
        <option v-for="(v,index) in clients" :key="index" :value="v.nom" />
      </datalist>
      <h2 v-if="clients.length == 1" :value="clients.value[0].nom" />
    </div>

  </div>

</template>

<style>
</style>