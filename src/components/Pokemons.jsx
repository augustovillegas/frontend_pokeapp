import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { PokemonList } from './PokemonList';
import { API_BASE_URL } from '../config/env';


export const Pokemons = () => {
    
    const [allPokemones, setAllPokemones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pokemonName, setPokemonName] = useState('');

    const pokemonByName = allPokemones.filter( (pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));   
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemonName(e.target.pokemonName.value);
    };


    
    useEffect(() => {

        const pokemonURL = `${API_BASE_URL}/api/pokemones/all`;

        fetch(pokemonURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
                setAllPokemones(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setError(error);
                setLoading(false);
            });
    }, []); 

    
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;

    return (
        <section className='p-4 py-5 sm:p-6 lg:p-8'>
         <form onSubmit={handleSubmit}>
            <div className='bg-white p-3 sm:p-4 flex gap-3 rounded-2xl text-base sm:text-lg'>
                <input 
                className='outline-none flex-1 min-w-0' 
                type="text" 
                autoComplete='off'
                placeholder='Search your Pokemon..' 
                name='pokemonName'
                /> 
                <button className='bg-red-500 p-2 sm:p-2.5 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors'>
                <IconSearch color='white' stroke={3}/>
                </button>
            </div>
         </form>
              <PokemonList pokemons={pokemonByName}/>
        </section>
    );
};
