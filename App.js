import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";

//agregando componentes de react al archivo
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

import { useState, useEffect } from "react"; //importar el hook useState
import { getPokemon, getPokemonData } from "./api";
import { FavoriteProvider } from "./contexts/favoritesContext";


  


export default function App() {
    const [pokemon, setPokemon] = useState([]); //estado de pokemon que se va a cambiar en el componente pokedex
    
    //empiezo haciendo el paginado  
    const [Page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState([]);

    
    // esto es para mi componente Pokedex
    //fetchPokemon  es una funcion que se ejecuta cuando el componente se monta en el DOM 
    const fetchPokemon = async () => {  //async es una funcion asincrona
        try {
            setLoading(true);     
            const data = await getPokemon(25, 25*Page); //25 es el numero de pokemon que quiero que me traiga   y 25*page es el numero de pagina que quiero que me traiga    
            //console.log(data);
            const promises = data.results.map(async (pokemon) => { //esta promesa lo que esta haciendo es crear una promesa por cada pokemon
                return await getPokemonData(pokemon.url);
            });
            const pokemonList = await Promise.all(promises); //esto lo que hace es no correr codigo hasta que todas las promesas se resuelvan
            setPokemon(pokemonList);
            setLoading(false);
            setTotal(Math.ceil(data.count/25));

        }catch(error){
            console.log(error);
        }
    }
    //esto es para mi componente Pokedex
    //useEffect es un hook que se ejecuta cuando el componente se monta en el DOM
    useEffect(() => {
        fetchPokemon();
    }, [ Page ]);

    const updateFavoritePokemon = (name) => {
        const updated = [...favorite];
        const isFavorite = updated.indexOf(name);
        if (isFavorite >= 0) {
          updated.splice(isFavorite, 1);
        } else {
          updated.push(name);
        }
        setFavorite(updated);
      };


    return (
        <FavoriteProvider value={{
            favoritePokemon: favorite,
            updateFavoritePokemon: updateFavoritePokemon}}> 
            <div>
                <Navbar />
                <div className="App">
                    <Searchbar/>
                
                    <Pokedex 
                        loading={loading}
                        pokemon={pokemon}
                        Page={Page}
                        setPage={setPage}
                        total={total}
                    />
                </div>
            </div>
        </FavoriteProvider>
    );
}


//pasando informacion de un componente padre a un componente hijo.
//un componente padre es el que encapsula todos los componentes hijos, en este caso el 
//componente padre es App.js .
//las prop son informacion que podemos mandar del componente padre al componente hijo