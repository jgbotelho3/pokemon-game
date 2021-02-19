export default {
    state: {
        pokemons: [{name: 'Pikachu'}]
    },

    mutations: {
        STORE_POKEMON(state, pokemon){
            state.pokemons.push(pokemon)
        }
    },

    actions: {
    //   storePokemon({commit}){
    //       axios.get('https://pokeapi.co/api/v2/pokemon/1')
    //       .then(response => {
    //           commit('STORE_POKEMON', response.data.name)
    //       })
    //   }  

    storePokemon(context, params){
        return context.commit('STORE_POKEMON', params)
    }
    },

    getters: {
        getPokemons: state => {
            console.log(state.pokemons)
            return state.pokemons
        }
    }
}