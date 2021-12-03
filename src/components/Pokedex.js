import React from "react";
import style from "../styles/Pokedex.module.css";

const Pokedex = () => {
    return (
        <div >
            <div className={style.header}>
                <h1>Pokedex</h1>
                <div>Pagination</div>
            </div>
            <div className={style.pokedex}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
    );
};

export default Pokedex;

