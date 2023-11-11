<!-- StorePokemon – This component represents a single store Pokemon available for purchase -->

<template>
    <div class="card px-0 m-3 col-3">
        <div :class="'card-header text-white bg-' + pokemon.type">
            Level: {{pokemon.level}}
        </div>
        <div class="card-body">
            <h5 :class="'card-title text-' + pokemon.type">{{pokemon.name}}</h5>
            <router-link to="#" :class="'btn text-white me-3 btn-' + pokemon.type" @click="pokeStore.getPokemon(pokemon.id)">Get</router-link>
        </div>
    </div>
</template>

<script>
import { usePokeStore } from '../stores/store.js';

export default {
    props: ['pokemon'],
    setup() {
        const pokeStore = usePokeStore()
        //console.log(pokeStore.storePokemon)
        return {
            pokeStore
        }

    },
}
</script>
