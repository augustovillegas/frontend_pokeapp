import { createContext, useState } from "react";


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [showDetailPokemon, setShowDetailPokemon] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const showPokemon = (pokemonInfo) => {
        
        setIsLoading(true);
        
        const {id, name, skills, type, animatedImage  } = pokemonInfo;

        setPokemonDetail({
            id,
            name,
            skills,
            type,
            animatedImage
        });
        
        setShowDetailPokemon(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);

        setShowDetailPokemon(true);
    };

    const closePokemonDetail = () => {
        setShowDetailPokemon(false);
    };

    return (<PokemonContext.Provider value={{
        showDetailPokemon,
        showPokemon,
        closePokemonDetail,
        pokemonDetail,
        isLoading
    }}
    > {children} 
    </PokemonContext.Provider>
    );
};