import React from 'react'
import { colorByType } from '../utils/constants';


export const PokemonDetail = ({ pokemon }) => {
  
  
    return (
    
        <>
        <header className='absolute left-1/2 -translate-x-1/2 -translate-y-[92%] scale-[140%] sm:scale-[160%] lg:scale-[180%]'>
        <img className="pixelated" src={pokemon?.animatedImage} alt="" />
        </header>
        <div className='overflow-y-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 grid gap-2 content-start'>
        <span className='text-slate-400 text-sm font-semibold '> N°{pokemon?.id} </span> 
        <h2 className='font-bold text-lg sm:text-xl capitalize'> {pokemon?.name} </h2>
        <ul className='flex gap-2 justify-center'>
        {pokemon?.type.map((type, index) => (
          <li className={`p-1 rounded-md px-2 text-white text-sm ${colorByType[type]}`} key={index}>{type}</li> 
         ))}
        </ul>
        <div>
        <h4 className='font-bold capitalize'>Pokemon Entry</h4>
        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magnam dolor amet tempora laudantium officia voluptatibus placeat vel enim hic? Recusandae possimus odio adipisci officiis dolores blanditiis, vitae consequuntur ipsa.</p>
        </div>
        <section className="grid gap-2">
          <h4 className="font-bold capitalize">Abilities</h4>
          <ul className="grid grid-cols-2 gap-4">
            {pokemon?.skills.map((skill) => (
              <li
                key={skill}
                className="bg-slate-100 block rounded-full p-1 capitalize"
              >
                <span>{skill}</span>
              </li>
            ))}
          </ul>
         </section>
        </div> 
        
        </>
  )
};
