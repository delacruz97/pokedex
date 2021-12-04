import React from "react";

const FavoritesContext = React.createContext({
    favoritePokemon: [],
    updateFavoritePokemon: (id) => null
}
);


export const FavoriteProvider = FavoritesContext.Provider;

export default FavoritesContext;