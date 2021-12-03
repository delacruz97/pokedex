import React from 'react';
import style from "../styles/Searchbar.module.css";
import {searchPokemon} from '../api';
import { useState } from 'react';



//actualizar nuestra vista de react cuando lo pintamos y cuando utilizamos variables que necesitan cambiar de valor
const Searchbar = () => {
    const [search, setSearch] = useState(''); // buscar es el estado y setSearch es la función para cambiar el estado
    const [pokemon, setPokemon] = useState(); // pokemon es el estado y setPokemon es la función para cambiar el estado   



    const onChange = (e) => { //funcion onChange que se ejecuta cuando el usuario escribe en el input
        setSearch(e.target.value); //setSearch es la funcion que cambia el state
    }

    const onclick = async (e) => {
       const data = await searchPokemon(search);
        setPokemon(data);
    }

    


    return (
        <div className={style.searchbarContainer}>
            <div className={style.searchbar}>
                <input type="text" placeholder="Buscar pokemon..."
                onChange={onChange}
                />
            </div>

            <div className={style.searchbarBtn}>
                <button onClick={onclick}>Buscar</button>
            </div>
            <div>
                {/*aqui va el componente pokemon con los datos de pokemon */}   
            </div>
        </div>
    );
};

export default Searchbar;