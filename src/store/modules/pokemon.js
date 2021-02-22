import axios from "axios";

export default {
  state: {
    correctPokemon: {
      name: "",
      image: "",
    },

    options: [],
  },

  mutations: {
    STORE_POKEMON(state, pokemon) {
      state.correctPokemon = {
        name: pokemon.name,
        image: pokemon.sprites.front_shiny,
      };
    },
    STORE_OPTIONS(state, options) {
      options.forEach((option) => {
        state.options.push(option.name);
      });

      state.options.push(state.correctPokemon.name);
      state.options.sort();
    },

    RESET_OPTIONS(state) {
      while (state.options.length > 0) {
        state.options.pop();
      }
    },
  },

  actions: {
    storePokemon({ commit }) {
      const id = Math.floor(Math.random() * 898) + 1;
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        commit("STORE_POKEMON", response.data);
      });
    },

    storeOptions({ commit }) {
      const id = Math.floor(Math.random() * (890 - 4)) + 4;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${id}`)
        .then((response) => {
          commit("STORE_OPTIONS", response.data.results);
        });
    },

    resetOptions({ commit }) {
      commit("RESET_OPTIONS");
    },
  },

  getters: {
    getOptions: (state) => {
      return state.options;
    },

    getCorrectOptionPokemonName: (state) => {
      return state.correctPokemon.name;
    },
    getCorrectOptionPokemonImage: (state) => {
      return state.correctPokemon.image;
    },
  },
};
