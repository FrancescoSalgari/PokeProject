<template>
    <v-container>
      <v-text-field v-model="search" label="Search Pokemon" @keyup.enter="fetchPokemon" />
      <v-btn @click="fetchPokemon">Search</v-btn>
      <v-card v-if="pokemon">
        <v-card-title>{{ pokemon.name }}</v-card-title>
        <v-card-text>
          <!-- Display Pokemon details here -->
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        search: '',
        pokemon: null,
      };
    },
    methods: {
      async fetchPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search.toLowerCase()}`);
        this.pokemon = response.data;
      },
    },
  };
  </script>
  