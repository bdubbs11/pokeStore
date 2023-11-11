<!-- Header – This component represents the header/nav bar that shows on all pages.-->
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <router-link class="navbar-brand me-5" to="/">Pokemon Collector</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/collection">Collection</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/store">Pokemon Store</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Save &amp; Load
                    </router-link>
                    <ul class="dropdown-menu">
                    <li><router-link :class="'dropdown-item'" to="#" @click="pokeStore.savePokemon">Save Data</router-link></li>
                    <li><router-link :class="'dropdown-item'" to="#" @click="pokeStore.loadPokemon">Load Data</router-link></li>
                    </ul>
                </li>
                </ul>
                <strong class="navbar-text navbar-right me-3">Pokemon: {{pokeStore.totalCount}} </strong>
            </div>
            </div>
        </nav>
</template>

<script>
import { usePokeStore } from '../stores/store.js'

 export default {
    //props: ['pokemon'],
    name: 'Header',
    setup(){
        const pokeStore = usePokeStore()
        return{
            pokeStore
        }
    }
}
</script>
