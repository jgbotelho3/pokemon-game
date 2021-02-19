<template>
  <main class="mx-auto w-full h-full">
    <div class="flex bg-gray-50 rounded-md shadow-2xl max-w-screen-xl mx-auto">
      <div class="w-1/2 h-full py-40 max-w-screen-md">
        <img
          class="w-1/2 mx-auto"
          :src="getCorrectOptionPokemonImage"
          width="200px"
          height="200px"
          alt="Logo Vue JS"
        />

        <div
        v-if="isCorrect"
          class="bg-green-400 h-20 flex justify-items-center items-center shadow-2xl rounded-md"
        >
          <h1
            class="italic mx-auto text-4xl font-bold text-white text-center px-4"
          >
            {{ getCorrectOptionPokemonName }}
          </h1>
        </div>
        <div
        v-else
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-20 flex justify-items-center items-center shadow-2xl rounded-md"
        >
          <h1
            class="italic mx-auto text-4xl font-bold text-white text-center px-4"
          >
            ??????????????????????????
          </h1>
        </div>
      </div>
      <div
        class="w-1/2 h-full py-40 flex flex-col items-center justify-items-center"
      >
        <button
          v-for="(option, index) in options"
          :key="index"
          @click="chooseOption"
          :value="option"
          class="mt-4 bg-red-400 w-4/5 h-16 flex justify-items-center items-center shadow-2xl rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-red-500 focus:outline-none focus:border-color-white"
        >
          <span class="mx-auto text-2xl font-bold text-white text-center px-4">
            {{ option }}
          </span>
        </button>
      </div>
    </div>
    <div v-if="isCorrect">
      </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      options: [],
      correctOption: {},
      isCorrect: false,
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
        this.startGame();
      } else {
        console.log('Acertouuu')
        this.isCorrect = true
      }
    },

    resetOptions() {
      this.$store.dispatch("resetOptions");
    },
  },
};
</script>
