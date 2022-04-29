<script setup>
import Axios from '../api/axios'
import { ref } from 'vue'
import { useDefaultStore } from '../stores/index'

const store = useDefaultStore()
Axios()

const retour = ref([])

    Axios().get('/planning?dateArrivee=' + store.dates.dateArrivee  + '&dateDepart=' + store.dates.dateDepart )
        .then(response => retour.value = response.data)  

function couleurCategorie(categorie){
    
    if(categorie == 3) return "green"
    if(categorie == 2) return "orange"
    if(categorie == 1) return "red"

    return "black"
}


</script>

<template>

    <div class="planning">
        <h3 v-for="(date,index) in retour" :key="index" class="date" v-bind:class="couleurCategorie(date.categorie)" > {{ date.date }}</h3>
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

.date{
    border: 2px grey;
    border-collapse: collapse;
    color: white;
}

.planning{
    border: 2px grey;
}

.red{
    background-color: red;
}

.orange{
    background-color: orange;
}

.black{
    background: black;
}

.green{
    background-color: green;
}

</style>