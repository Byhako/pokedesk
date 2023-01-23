import { GetStaticProps, NextPage } from "next"
import { Grid } from '@nextui-org/react'

import { Layout } from "../components/layouts"
import { PokemonCard } from "@/components/pokemon"
import { pokeApi } from "@/api"
import { PokemonResponse, SmallPokemon } from "@/interfaces";

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon: SmallPokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((item: SmallPokemon, idx: number) => ({
    name: item.name,
    url:  item.url,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`
  }))


  return {
    props: {
      pokemons: pokemons
    }
  }
}


export default Home
