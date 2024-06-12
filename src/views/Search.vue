<template>
    <div>
      <v-text-field v-model="searchQuery" label="Cerca Pokémon"></v-text-field>
      <v-btn @click="searchPokemon">Cerca</v-btn>
      <v-list>
        <v-list-item v-for="pokemon in pokemons" :key="pokemon.name">
          <v-list-item-content>
            <v-list-item-title>{{ pokemon.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Search',
    data() {
      return {
        searchQuery: '',
        pokemons: []
      };
    },
    methods: {
      async searchPokemon() {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.searchQuery.toLowerCase()}`);
          this.pokemons = [response.data];
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      }
    }
  };
  </script>
  