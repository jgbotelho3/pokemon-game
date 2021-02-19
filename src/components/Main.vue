<template>
  <main class="mx-auto w-full h-full">
    <div class="flex bg-gray-50 rounded-md shadow-2xl max-w-screen-xl mx-auto">
      <div class="w-1/2 h-full py-40 max-w-screen-md">
        <img
          class="w-1/2 mx-auto"
          src="../assets/logo.png"
          width="200px"
          height="200px"
          alt="Logo Vue JS"
        />

        <div
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-20 flex justify-items-center items-center shadow-2xl rounded-md"
        >
          <h1
            class="italic mx-auto text-4xl font-bold text-white text-center px-4"
          >
            Quem é este pokemon????
          </h1>
        </div>
      </div>
      <div
        class="w-1/2 h-full py-40 flex flex-col items-center justify-items-center"
      >
        <button
          class="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-4/5 h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            Option 1
          </span>
        </button>

        <button
          class="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-4/5 h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            Option 1
          </span>
        </button>

        <button
          class="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-4/5 h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            Option 1
          </span>
        </button>

        <button
          class="mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-4/5 h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            {{getPokemons}}
          </span>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: "Main",
  data() {
    return {
      pokemons: [],
    };
  },
  props: {
    pokemon: {},
  },
  created(){
    axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => {
      this.$store.dispatch('storePokemon', response.data.name)
    })
  },
  computed: {
    getPokemons(){
      return this.$store.getters.getPokemons
    }
  }
};
</script>
