<script setup>
import Axios from '../api/axios'
import { ref, watch, onMounted, computed } from 'vue'
import { useDefaultStore } from '../stores/index'
import moment from 'moment'


const store = useDefaultStore()
const dates = defineProps({
        dates: {
        type: Object,
        required : true
        }
    }
)
const retour = ref([])

onMounted(() => {
    requete();
})

watch(dates,(datesNew,datesOld) => {
        requete();
    }
)

function jour(date){
    return moment(date).format("dddd")
}


function requete(){
    Axios().get( store.urlSymfony + '/planning?dateArrivee=' + dates.dates.dateArrivee  + '&dateDepart=' + dates.dates.dateDepart )
        .then(response => retour.value = response.data)  
}

function couleurCategorie(categorie){
    
    if(categorie == 3) return "green"
    if(categorie == 2) return "orange"
    if(categorie == 1) return "red"

    return "black"
}


</script>

<template>

    <div class="planning">
        <h3 v-for="(date,index) in retour" :key="index" class="date" v-bind:class="couleurCategorie(date.categorie)" >{{ jour(date.date)}} {{ date.date }}</h3>
    </div>

</template>

<style>

fieldset{
  display: flex;
  flex-direction: column;
}

.date{
    border: 1px solid black;
    color: white;
    margin: 0;
    padding: 1rem;
    text-align: center;
    width:13%;
    
}

.planning{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
    background-color: rgb(78, 209, 21);
}

</style>