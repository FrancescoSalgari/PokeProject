<template>
    <v-container>
      <v-row>
        <v-col
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          cols="12"
          md="4"
        >
          <v-card>
            <v-card-title>{{ pokemon.name }}</v-card-title>
            <v-card-actions>
              <v-btn :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }">Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemons: [],
      };
    },
    async created() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025');
      this.pokemons = response.data.results;
    },
  };
  </script>
  