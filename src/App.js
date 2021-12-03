import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";

//agregando componentes de react al archivo
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

import { useState, useEffect } from "react"; //importar el hook useState
import { getPokemon, getPokemonData } from "./api";





export default function App() {
    const [pokemon, setPokemon] = useState([]); //estado de pokemon que se va a cambiar en el componente pokedex
    
    //empiezo haciendo el paginado  
    const [currentPage, setCurrentPage] = useState();
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(false);


    
    // esto es para mi componente Pokedex
    //fetchPokemon  es una funcion que se ejecuta cuando el componente se monta en el DOM 
    const fetchPokemon = async () => {  //async es una funcion asincrona
        try {
            const data = await getPokemon();    
            //console.log(data);
            const promises = data.results.map(async (pokemon) => { //esta promesa lo que esta haciendo es crear una promesa por cada pokemon
                return await getPokemonData(pokemon.url);
            });
            const pokemonList = await Promise.all(promises); //esto lo que hace es no correr codigo hasta que todas las promesas se resuelvan
            setPokemon(pokemonList);
            setIsLoading(false);

        }catch(error){
            console.log(error);
        }
    }
    //esto es para mi componente Pokedex
    //useEffect es un hook que se ejecuta cuando el componente se monta en el DOM
    useEffect(() => {
        fetchPokemon();
    }, []);


    return (
        <div>
            <Navbar />
            <div className="App">
                <Searchbar/>
                {/** creando una pagina de login */}
                { isLoading ?
                <div>Cargando pokemones...</div>
                :
                <Pokedex pokemon={pokemon} />
                }
            </div>
        </div>
    );
}


//pasando informacion de un componente padre a un componente hijo.
//un componente padre es el que encapsula todos los componentes hijos, en este caso el 
//componente padre es App.js .
//las prop son informacion que podemos mandar del componente padre al componente hijo