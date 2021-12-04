import React from 'react';
import style from "../styles/Navbar.module.css";
import { useContext } from 'react';
import FavoritesContext from '../contexts/favoritesContext';



//creo la clase Navbar  que hereda de React.Component   
const Navbar = () => {

    const {favoritePokemon} = useContext(FavoritesContext);

let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <nav className={style.nav}> {/*creo dos contenedores horizontales, uno para el logo y otro para el corazon*/}
            <div/>  {/*esto me sirve para que no se me desordene todo*/}
            <div>
                <img src={imgUrl} alt="logo" className={style.image}/>
            </div>
            <div>💚{favoritePokemon.length}</div>
        </nav>
    );
}

export default Navbar;