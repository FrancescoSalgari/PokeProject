<template>
    <v-container>
      <v-text-field
        v-model="search"
        label="Search Pokemon"
        @keyup.enter="handleSearch"
      ></v-text-field>
      <v-btn @click="handleSearch">Search</v-btn>
      <v-row>
        <v-col v-if="pokemon" cols="12" md="6" lg="4">
          <PokemonCard :pokemon="pokemon" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { getPokemon } from '@/api';
  import PokemonCard from '@/components/PokemonCard.vue';
  
  export default {
    components: { PokemonCard },
    data() {
      return {
        search: '',
        pokemon: null,
      };
    },
    methods: {
      async handleSearch() {
        this.pokemon = await getPokemon(this.search.toLowerCase());
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  
