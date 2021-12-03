import React from 'react';
import styles from '../styles/pokemoncard.module.css';


//componente que no tiene estado, unicamente es para mostrar datos atraves de props

const Pokemon = (props) => {
    const {pokemon} = props; //destructuring    
    return (
        <div className={styles.pokemonCard}>
            <div className={styles.pokemonImg}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>

            </div>
            <div className={styles.body}>
                <div className={styles.titulo}>
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.pokemonType}>
                        {pokemon.types.map((type, idx) => {
                            return <div key={idx} className={styles.pokemontypetext}>{type.type.name}</div>
                        }
                        )}
                    </div>
                    <div className="pokemonFav">🖤</div>
                </div>

            </div>
        </div>
    )
}
export default Pokemon;