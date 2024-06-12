<template>
    <div>
      <v-form @submit.prevent="addPokemon">
        <v-text-field v-model="newPokemon.name" label="Nome"></v-text-field>
        <v-text-field v-model="newPokemon.type" label="Tipo"></v-text-field>
        <v-btn type="submit">Aggiungi Pokémon</v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddPokemon',
    data() {
      return {
        newPokemon: {
          name: '',
          type: ''
        }
      };
    },
    methods: {
      addPokemon() {
        // Logica per aggiungere Pokémon al DB (simulata)
        console.log('Nuovo Pokémon:', this.newPokemon);
        alert('Pokémon aggiunto con successo!');
        this.newPokemon.name = '';
        this.newPokemon.type = '';
      }
    }
  };
  </script>
  