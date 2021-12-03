import React from "react";
import style from "../styles/Pokedex.module.css";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
    //console.log(props);
    const { pokemon } = props;  // destructuring    
    return (
        <div >
            <div className={style.header}>
                <h1>Pokedex</h1>
                <Pagination 
                page={1}
                totalPages={100}
                onLeftClick={() => console.log("left")}
                onRightClick={() => console.log("right")}
                 
                
                />   
            </div>
{/* con esto muestro por pantalla los diferentes pokemons */}
            <div className={style.pokedex}>
                {pokemon.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />

                })}
            </div>
        </div>
    );
};

export default Pokedex;

