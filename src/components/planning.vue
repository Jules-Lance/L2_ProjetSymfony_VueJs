<script setup>
import Axios from '../api/axios'
import { ref, watch, onMounted } from 'vue'
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
const retourMeteo = ref([])

onMounted(() => {
    requeteSymfony()
    requeteMeteo()
})

watch(dates,(datesNew,datesOld) => {
        requeteSymfony()
    }
)

function jour(date){
    return moment(date).format("dddd")
}
function requeteMeteo(){

   Axios().get(store.urlMeteo)
        .then(response => retourMeteo.value = response.data)
}

function requeteSymfony(){
    Axios().get( store.urlSymfony + '/planning?dateArrivee=' + dates.dates.dateArrivee  + '&dateDepart=' + dates.dates.dateDepart )
        .then(response => retour.value = response.data)  
}

function couleurCategorie(categorie){
    
    if(categorie == 3) return "green"
    if(categorie == 2) return "orange"
    if(categorie == 1) return "red"

    return "black"
}

function meteo(date){
  
    const meteo = retourMeteo.value.daily.filter( recherche => {
        if(moment.unix(recherche.dt).format("yyyy-MM-DD") === date) return true
    })
    
    if(meteo.length > 0){
        return meteo[0]
    }

    return null
    
}

function lienIcon(date){
    return 'http://openweathermap.org/img/wn/' + meteo(date).weather[0].icon + '@2x.png'
}

</script>

<template>
    <div class="conteneur">
        <div class="explication">
            <h3 class="black">Plein</h3>
            <h3 class="red">Dernière place</h3>
            <h3 class="orange">Presque plein</h3>
            <h3 class="green">Disponible</h3>
        </div>
        <div class="planning">
            <div v-for="(date,index) in retour" :key="index" :class="[couleurCategorie(date.categorie),date]" >
                <h2>{{ jour(date.date)}}</h2>
                <h2>{{ date.date }}</h2>
                <div v-if="meteo(date.date) != null">
                    <h3>{{ meteo(date.date).weather[0].description}} : {{ meteo(date.date).temp.day}}</h3>
                    <img class='icon' :src='lienIcon(date.date)'>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.conteneur{
    flex-direction: column;;
}

.date{
    flex-direction: column;
    border: 1px solid black;
    color: white;
    padding: 0rem 1rem;
    text-align: center;
    width:15%;
    justify-content: stretch;
}

.explication{
    color:white;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
}

.explication * {
    margin:0;
    flex-grow: 1;
}


.date *{
    margin: 0.6rem;
}

.icon{
    width: 50px;
}

.planning{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.planning div{
    flex-grow: 1;
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