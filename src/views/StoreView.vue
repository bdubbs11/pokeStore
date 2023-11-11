<template>
    <div class="row mt-5">
            <div class="col-xs-12">
                <div>
                    <h1>Perfectly-Proportioned Premium Pokemon Proprietor</h1>
                    <br>
                    <div class="container-fluid">
                        <div class="row">
                            <!-- POKEMON 1--> <!-- v-for="(pokemon, index) in pokeStore.storePokemon" :key="index" -->
                            <store-pokemon v-for="(pokemon, index) in pokeStore.storePokemon" :key="index" :pokemon="pokemon"/>
                        </div> <!-- row end -->
                    </div> <!-- container end -->
                    
                </div>
            </div>
        </div>
</template>

<script>
import { usePokeStore } from '../stores/store.js'
import StorePokemon from '../components/StorePokemon.vue'
 
export default {
    name: 'StoreView',
    components: {
        StorePokemon,
    },
    setup (){
        const pokeStore = usePokeStore()

        return { pokeStore }
    }
}

</script>