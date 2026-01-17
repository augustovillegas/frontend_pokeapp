import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { PokemonList } from './PokemonList';
import { getAllPokemons } from '../config/pokemonApi';


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

        getAllPokemons()
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

    
    if (loading) {
        return (
            <section className='p-4 py-5 sm:p-6 lg:p-8'>
                <div className='min-h-[55vh] flex flex-col items-center justify-center text-center gap-2'>
                    <div className='w-16 h-16 flex items-center justify-center'>
                        <img
                            className='w-full h-full contrast-50 animate-spin-slow'
                            src="/pokeball-icon.png"
                            alt="Cargando"
                        />
                    </div>
                    <p className='max-w-xs text-slate-400 text-sm sm:text-base leading-tight'>
                        Conectando al servidor...
                    </p>
                </div>
            </section>
        );
    }
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
