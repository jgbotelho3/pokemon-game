<template>
  <main class="mx-auto w-full h-full">
    <div
      class="flex flex-col bg-gray-50 rounded-md shadow-2xl max-w-screen-xl mx-auto"
    >
      <div
        class="w-2/4 mx-auto py-20 2 max-w-screen-md flex flex-col justify-items-center items-center shadow-2xl rounded-md"
      >
        <img
          class="w-1/4 mx-auto"
          :src="getCorrectOptionPokemonImage"
          width="200px"
          height="200px"
          :alt="getCorrectOptionPokemonName"
        />

        <div
          v-if="isCorrect"
          class="bg-green-400 h-20 flex justify-items-center items-center shadow-2xl rounded-md"
        >
          <h1
            class="italic mx-auto text-2xl font-bold text-white text-center px-4"
          >
            {{ getCorrectOptionPokemonName }}
          </h1>
        </div>
        <div
          v-else
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-20 flex justify-items-center items-center shadow-2xl rounded-md"
        >
          <h1
            class="italic mx-auto text-2xl font-bold text-white text-center px-4"
          >
            Quem é esse pokémon???
          </h1>
        </div>
        <div v-if="isCorrect" class="mt-5 flex flex-col items-center justify-items-center max-w-screen-md">
          <span>Parabéns, você acertou!</span><br />
          <button class="mt-4 bg-gray-50 w-full h-10 flex justify-center items-center shadow-2xl rounded-md  hover:bg-gray-100 focus:outline-none focus:border-color-white" @click="startGame">Jogar novamente</button>
        </div>
        <div v-if="isError" class="mt-5 flex flex-col items-center justify-items-center max-w-screen-md">
          <span>Você errou! O nome certo é <strong>{{getCorrectOptionPokemonName}}</strong></span><br />
          <button class="mt-4 bg-gray-50 w-full h-10 flex justify-center items-center shadow-2xl rounded-md  hover:bg-gray-100 focus:outline-none focus:border-color-white" @click="startGame">Jogar novamente</button>
        </div>
      </div>

      <div
        v-if="!hideOptions"
        class="w-2/4 py-4 mx-auto flex flex-col items-center justify-items-center max-w-screen-md"
      >
        <button
          v-for="(option, index) in options"
          :key="index"
          @click="chooseOption"
          :value="option"
          class="mt-4 bg-purple-500 w-full h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-purple-300 focus:outline-none focus:border-color-white"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            {{ option }}
          </span>
        </button>
      </div>
    </div>
    <div v-if="isCorrect"></div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      options: [],
      isCorrect: null,
      isError: null,
      hideOptions: null
    };
  },
  created() {
    this.startGame();
  },
  computed: {
    getOptions() {
      return this.$store.getters.getOptions;
    },
    getCorrectOptionPokemonName() {
      return this.$store.getters.getCorrectOptionPokemonName;
    },
    getCorrectOptionPokemonImage() {
      return this.$store.getters.getCorrectOptionPokemonImage;
    },
  },

  methods: {
    startGame() {
      this.resetOptions();
      this.$store.dispatch("storePokemon");
      this.$store.dispatch("storeOptions");
      this.setOptions();
    },

    setOptions() {
      this.options = this.getOptions;
    },

    chooseOption(event) {
      event.preventDefault();

      if (this.getCorrectOptionPokemonName !== event.target.innerText) {
        console.log("Errouuuuu");
        this.isCorrect = false;
        this.isError = true;
        this.hideOptions = true
      } else {
        console.log("Acertouuu");
        this.isCorrect = true;
        this.Error = false;
        this.hideOptions = true
      }
    },

    resetOptions() {
      this.isCorrect = false;
      this.isError = false;
      this.hideOptions = null;
      this.$store.dispatch("resetOptions");
    },
  },
};
</script>
