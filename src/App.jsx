import { Aside } from "./components/Aside"
import { ModalPokemon } from "./components/ModalPokemon"
import { Pokemons } from "./components/Pokemons"
import { usePokemonContext } from "./hooks/usePokemonContext"

function App() {
  
  const { showDetailPokemon, closePokemonDetail, pokemonDetail, isLoading } = usePokemonContext();

  return (
    <section className="bg-[#F6F8FC] min-h-screen font-outfit overflow-y-auto bg-[url(/pokeball-icon.png)] bg-no-repeat bg-[-10%_-20%] overflow-x-hidden">
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_360px] xl:grid-cols-[minmax(0,_1fr)_380px] px-3 sm:px-5 lg:px-6">
        <Pokemons />
        <Aside pokemon={pokemonDetail} isLoading={isLoading} />
        <ModalPokemon
          showModal={showDetailPokemon}
          onCloseModal={closePokemonDetail}
          pokemon={pokemonDetail}
        />
      </main>
    </section>
  );
}

export default App
