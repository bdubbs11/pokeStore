import { defineStore } from 'pinia'
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs, addDoc, deleteDoc, doc
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgWGpaazpTNa9UItOSX4umP4xK3uVbgDo",
    authDomain: "p3-poke.firebaseapp.com",
    projectId: "p3-poke",
    storageBucket: "p3-poke.appspot.com",
    messagingSenderId: "888097607577",
    appId: "1:888097607577:web:7b3bb836258116ff57cd08",
    measurementId: "G-NMCCGV3YEQ"
  };

// other firebase stuff
initializeApp(firebaseConfig )
const db  = getFirestore();
const colRef = collection(db, 'pokemon');

export const usePokeStore = defineStore('pokeStore',{
    state: () => ({
        pokemonCollection: [],
        storePokemon: [
            {name: 'Squirtle', level: 1, type: 'primary', id: 0},
            {name: 'Bulbasaur', level: 1, type: 'success', id: 1},
            {name: 'Charmander', level: 1, type: 'danger', id: 2},
            {name: 'Pikachu', level: 1, type: 'warning', id: 3},
        ]
    }),
    getters: {
        totalCount(state){
            // Provides the total count of Pokemon in your collection
            return state.pokemonCollection.length
        }
    },
    actions: {
        trainPokemon(id){
            //This action will increase the level of the Pokemon with the matching id by 1
            //console.log(id) //id will be the number
            //console.log(this.pokemonCollection)
            for( let pokemon of this.pokemonCollection){
                if(pokemon.id == id){
                    pokemon.level += 1;
                }
            }
        },
        releasePokemon(id){
            //This action will remove the Pokemon with the matching id from your
            //collection. Note: this does NOT update the Firebase data, only load and save does that. 
            let index = 0
            for( let pokemon of this.pokemonCollection){
                if(pokemon.id == id){
                    this.pokemonCollection.splice(index,1)
                }
                index += 1;
            }

        },
        getPokemon(id){
            //This action will add one new Pokemon from the store options with the
            //matching id to the Pokemon collection. Note: this does NOT update the Firebase data, only load
            //and save does that.

            // need to clone pokemon
            let newPokemon = Object.assign({},this.storePokemon[id])
            let newID = Math.floor(Math.random() * 100000000)
            newPokemon.id = newID
            this.pokemonCollection.push(newPokemon)
        },
        async savePokemon() {
            //This action will save the current collection of Pokemon into the Firestore
            //database and replace whatever collection is currently stored.
            try {
              const snapshot = await getDocs(colRef);
        
              for (let pokemon of snapshot.docs) {
                const docRef = doc(db, 'pokemon', pokemon.id);
                await deleteDoc(docRef);
              }
              for (let pokemon of this.pokemonCollection) {
                await addDoc(colRef, {
                  name: pokemon.name,
                  level: pokemon.level,
                  type: pokemon.type,
                  id: pokemon.id,
                });
              }
            } catch (err) {
              console.log(err.message);
            }
          },
        loadPokemon(){
            //This action will pull the stored set of Pokemon from the Firestore database
            //and load them into the local collection.
            getDocs(colRef)
                .then((snapshot) => {
                    let poke = []
                    snapshot.docs.forEach((doc) => {
                        poke.push({ ...doc.data(), id: doc.id }) 
                    })
                    this.pokemonCollection = poke
                    console.log(poke)
                    console.log(this.pokemonCollection)
                })
                .catch(err =>{
                    console.log(err.message)
                })
        }
    }
})