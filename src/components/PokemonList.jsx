import React from 'react'
import { PokemonPreview } from './PokemonPreview'
import { usePokemonContext } from '../hooks/usePokemonContext';


export const PokemonList = ({ pokemons }) => {

    const { showPokemon } = usePokemonContext();



    return (
        <section className='pt-10 sm:pt-12 lg:pt-14 grid justify-center justify-items-center gap-4 gap-y-10 sm:gap-5 sm:gap-y-12 grid-cols-[repeat(auto-fit,_minmax(160px,_220px))] sm:grid-cols-[repeat(auto-fit,_minmax(180px,_230px))] xl:grid-cols-[repeat(auto-fit,_minmax(200px,_240px))]'>
            {
                pokemons.map((pokemon) => (
                    <PokemonPreview 
                    key={pokemon.id} 
                    pokemon={pokemon}
                     onClick={showPokemon}/>
                ))
            }
        </section>
    );
};



