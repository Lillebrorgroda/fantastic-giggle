import pokemon from "./Components/pokemon.json"
import Pokemon from "./Pokemon"


const App = () => {
  return (
    <>
      <h1>React Boilerplate</h1>

      {pokemon.pokemons.map((p) => {
        return (
          <Pokemon
            key={p.name}
            name={p.name}
            types={p.height}
          />
        )
      }
      )
      }
    </>

  )
}



export default App