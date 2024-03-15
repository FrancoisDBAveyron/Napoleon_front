import type ts from "typescript";

<script setup lang="ts">
import type {BatailleInterface} from '~/types/batailles'
import {ref} from 'vue' 


const {
  data: batailles,
  pending,
  error,
} = useFetch<Array<BatailleInterface>>('/api/bataille', {
  default: () => [] as Array<BatailleInterface>,
})

const image_date = ref('image');

const text_bataille = ref('text');

var lieu = document.getElementById("lieu")

var force = document.getElementById("force") 

var pertes = document.getElementById("pertes")

var situation = document.getElementById("situation")

var description = document.getElementById("situation")



</script>

<template>

  <div class="bataille" v-for="bataille in batailles" :key = 'bataille.id'>
    <div :class="image_date" >
      <h1> {{bataille.nom}} - {{bataille.annee}}</h1>

      <img :src="`data:image/png;base64,${bataille.image}`"  width="90%"/>
    </div>    

    <div id="description" :class="text_bataille">
      <strong class="titre">Date et lieu</strong>
      <p id="lieu"> {{bataille.lieu}}</p> 
      <p></p>  

      <strong>Forces et présence</strong>
      <p id="force"> {{bataille.force}}</p>

      <strong>Pertes</strong>
      <p id="pertes"> {{bataille.pertes}} </p>

      <strong>Situation générale</strong>
      <p id="situation"> {{bataille.situation}} </p>

    </div>  

    <button> clic </button>
  </div> 

</template>

<style scoped>



.bataille{
  display: flex;
  border-style: solid;
  border-color: black; 
  border-width: 1px;
  margin-right: 1%;
  margin-left: 1%;
  background-color: silver;
}


.image {
  text-align: center;
  width: 25%;
  padding: 1%;
}

.text{
  display: block;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  width: 70%;
  margin: 0.3rem;
  overflow: scroll;
  scrollbar-color: grey;
  scrollbar-width: 10px;
} 

p {
  margin-left: 1%;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: Arial, Helvetica, sans-serif; 
  font-size: 12;
}

strong {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 12;
}

button{
  border-style: solid;
  background-color: blue;
  height: 1.25%;
  border-radius: 10%;
  
}


</style>
