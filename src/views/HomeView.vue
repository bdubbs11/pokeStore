
<template>
  <div class="row mt-5">
            <div class="col-xs-12">
                <div>
                    <h1>Gotta Catch Em All</h1>
                    <h6>You may Save & Load your Data</h6>
                    <h6>Click Collection to see your Pokemon</h6>
                    <h6>Click Pokemon to get more Pokemon</h6>
                    <hr>
                    <p>Total Pokemon Collected: {{pokeStore.totalCount}}</p>
                </div>
            </div>
        </div>
</template>

<script>
import { usePokeStore } from '../stores/store.js'

export default {
  name: 'HomeView',
  setup(){
        const pokeStore = usePokeStore()
        return{
            pokeStore
        }
    }
}

</script>

