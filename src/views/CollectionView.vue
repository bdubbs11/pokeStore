<template>
  <div class="row mt-5">
    <div class="col-xs-12">
        <div>
            <h1>My Pokemon Collection</h1>
                <br>
                <div v-if="totalCount === 0">
                    <!-- Use this div if you don't have any -->
                    <p>You don't have any pokemon! Go buy some from the store.</p>
                </div>
                <div v-else>
                  <div class="container-fluid">
                    <div class = "row">
                      <my-pokemon v-for="(pokemon, index) in pokeStore.pokemonCollection" :key="index" :pokemon="pokemon"/>     
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyPokemon from '../components/MyPokemon.vue'
import { usePokeStore } from '../stores/store.js'
//import {toRefs} from 'vue'

export default {
  name: 'CollectionView',
  props:['pokemon'],
  components: { 
    MyPokemon 
  },
  setup(){
    const pokeStore = usePokeStore()
    const totalCount = pokeStore.totalCount
    //console.log(totalCount)
    //const { totalCount } = toRefs(pokeStore)
    //console.log(totalCount)

    return{
      totalCount,
      pokeStore
    }
  }
}
</script>

<style scoped>
.release-enter-to{
    opacity: 1;
}
.release-enter-from{
    opacity: 0;
}
.release-enter-active{
    transition: all 0.3s ease-in;
}
.release-leave-to{
    opacity: 0;
}
.release-leave-from{
    opacity: 1;
}
.release-leave-active{
    transition: all 0.3s ease-in;
}
</style>
