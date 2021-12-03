import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";

//agregando componentes de react al archivo
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

import { useState, useEffect } from "react"; //importar el hook useState


export default function App() {
    const [pokemon, setPokemon] = useState([]); //estado de pokemon que se va a cambiar en el componente pokedex

    useEffect(() => {
        console.log("useEffect");
    }, []);


    return (
        <div>
            <Navbar />
            <div className="App">
                <Searchbar/>
                <Pokedex/>
            </div>
        </div>
    );
}


//pasando informacion de un componente padre a un componente hijo.
//un componente padre es el que encapsula todos los componentes hijos, en este caso el 
//componente padre es App.js .
//las prop son informacion que podemos mandar del componente padre al componente hijo