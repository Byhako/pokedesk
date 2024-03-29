import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api"
import { PokemonFull } from "@/interfaces";
import { saveFavorites } from '@/utils';
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: PokemonFull
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [exist, setExist] = useState(false)

  useEffect(() => {
    setExist(JSON.parse(localStorage.getItem('pokemons') || '[]').includes(pokemon.id))
  }, []);

  const handleClick = () => {
    saveFavorites(pokemon.id)
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
    setExist(!exist)
  }

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || ''}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button
                color='gradient'
                ghost={!exist}
                onClick={handleClick}
              >
                {exist ? (
                  <>Borrar de Favoritos</>
                  ) : (
                  <>Guardar en Favoritos</>
                )}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths =async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index+1}`)

  return {
    paths: pokemons151.map(id => ({
      params: {id}
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage
