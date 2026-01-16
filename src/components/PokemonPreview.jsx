import React from 'react'
import { colorByType } from '../utils/constants'



export const PokemonPreview = ({ pokemon, onClick }) => {  
      
    return (
    <article  onClick={() => onClick(pokemon)} className='w-full max-w-[240px] text-center bg-white rounded-3xl relative font-semibold capitalize pb-4 shadow-slate-400/10 border-2 border-transparent hover:border-slate-200 cursor-pointer group grid gap-2'>
        <header className='h-24 sm:h-28 mb-2 flex items-center justify-center overflow-hidden'>
        <img className='w-full h-full object-contain group-hover:scale-110 transition-transform pixelated'
        src={pokemon.image} alt={pokemon.image}/>
        </header>
        <span className='text-sm text-slate-400'>N°{pokemon?.id}</span>
        <h4 className='text-base sm:text-lg'>{pokemon?.name}</h4>
        <ul className='flex flex-wrap gap-2 justify-center px-3'>
        {pokemon?.type.map((type, index) => (
          <li className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type]}`} key={index}>{type}</li> 
         ))}
        </ul>
    </article>
  )
}
