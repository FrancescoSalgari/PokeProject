<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>{{ pokemon.name }}</v-card-title>
            <v-card-text>
              <!-- Display Pokemon details here -->
            </v-card-text>
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
        pokemon: null,
      };
    },
    async created() {
      const { id } = this.$route.params;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemon = response.data;
    },
  };
  </script>
  