<template>
    <v-card>
      <v-card-title>{{ pokemon.name }}</v-card-title>
      <v-card-subtitle>
        <v-img :src="pokemon.sprites.front_default" alt="pokemon.name"></v-img>
      </v-card-subtitle>
      <v-card-text>
        Type: {{ pokemon.types.map(type => type.type.name).join(', ') }}
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      pokemon: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  