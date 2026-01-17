import React from 'react'
import { PokemonDetail } from './PokemonDetail'



export const Aside = ({ pokemon, isLoading }) => {
  
  
  
  
  return (

    <section className="hidden lg:block sticky top-0 h-screen">
              

      <article className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500 ${
          pokemon && !isLoading ? "left-0" : "left-[50vw]"
        }`}> 
        
       <PokemonDetail pokemon={pokemon}/>
        
      </article>

      <article className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-500 ${
          pokemon ? "left-[50vw]" : "left-0"
        }`}> 
       
       <header className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[-15%] scale-90'>
        <img src="/no-pokemon-selected.png" alt="" />
       </header> 
        
       <span className="text-lg text-slate-400 px-20">
          Select a Pokemon to display here.
        </span>
       
      </article>
        
       {/* Loading */}
       <div className="w-[60px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center">
        <img
          className="contrast-50 animate-spin-slow"
          src="/pokeball-icon.png"
          alt=""
        />
        <span className="block text-slate-400 text-sm mt-2">Cargando..</span>
      </div>

    </section>
  )
}
