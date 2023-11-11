<!-- App – This component represents the main structure of the pages. -->
<template>

         <div class="container"> 
            <Header/>
            <router-view v-slot="{ Component }">
                <transition name = "transitions" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
            
        </div>

</template>

<script>
import Header from './Header.vue';
import { usePokeStore } from '../stores/store.js'

export default {
    setup () {
        const pokeStore = usePokeStore()

        return { pokeStore }
    },

    components:{
        Header
    }
}
</script>

<style scoped>
.transitions-enter-from{
    opacity: 0;
    transform: translateX(100px);
}
.transitions-enter-active{
    transition: all 0.3s ease-out;
}
.transitions-leave-to{
    opacity: 0;
    transform: translateX(-100px);
}
.transitions-leave-active{
    transition: all 0.3s ease-in;
}
</style>

