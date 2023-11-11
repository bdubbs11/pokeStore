<!-- MyPokemon – This component represents a single Pokemon in your collection -->

<template>
    <!-- Else use this one and put Pokemon here -->
    <!-- need to use pokemon from the ones being added i think -->
    <div class="card px-0 m-3 col-3">
        <div :class="'card-header text-white bg-' + pokemon.type">
            Level: {{pokemon.level}}
        </div>
        <div class="card-body">
            <h5 :class="'card-title text-' + pokemon.type">{{pokemon.name}}</h5>
            <router-link to="#" :class="'btn text-white me-3 btn-' + pokemon.type" @click="pokeStore.trainPokemon(pokemon.id)">Train</router-link>
            <router-link to="#" :class="'btn text-white me-3 btn-' + pokemon.type" @click="pokeStore.releasePokemon(pokemon.id)">Release</router-link>
        </div>
    </div>
</template>

<script>
import { usePokeStore } from '../stores/store.js';

export default {
    props: ['pokemon'],
    setup() {
        const pokeStore = usePokeStore()
        return {
            pokeStore
        }
    }
}
</script>

<!-- <style scoped>
.release-enter-from{
    opacity: 0;
    transform: translateX(100px);
}
.release-enter-active{
    transition: all 0.3s ease-out;
}
.release-leave-to{
    opacity: 0;
    transform: translateX(-100px);
}
.release-leave-active{
    transition: all 0.3s ease-in;
}
</style> --> 