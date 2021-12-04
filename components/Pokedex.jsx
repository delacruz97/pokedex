import React from "react";
import style from "../styles/Pokedex.module.css";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";


const Pokedex = (props) => {
    //console.log(props);
    const { pokemon, Page, setPage, total, loading } = props;  // destructuring    
    
    const lastPage = () => {
        const nextPage = Math.max(Page - 1, 0);
        setPage(nextPage);

    }

    const nextPage = () => {
        const nextPage = Math.min(Page + 1, total);
        setPage(nextPage);

    } 

    

    return (
        <div >
            <div className={style.header}>
                <h1>Pokedex</h1>
                <Pagination 
                Page={Page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />   
            </div>

{/**loadin de carga */}
            {loading ? <h1>Loading...</h1> 
            :
                <div className={style.pokedex}>
                    {pokemon.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />

                    })}
                </div>
            }
            {/* con esto muestro por pantalla los diferentes pokemons */}
        </div>
    );
};

export default Pokedex;

