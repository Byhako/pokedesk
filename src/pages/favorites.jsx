import { useState, useEffect } from 'react';
import { Card, Container, Grid, Text } from '@nextui-org/react';
import { Layout } from "@/components/layouts";
import { getFavorites } from '@/utils';

export default function Favorites () {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(getFavorites())
  }, [])
  

  return (
    <Layout title='Favoritos'>
      <h1>FAVORITOS</h1>

      {pokemons.length ? (
        <>
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {pokemons.map(id => (
              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card isHoverable isPressable css={{ padding: 10 }}>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width={'100%'}
                    height={140}
                  />
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </>
      ) : (
        <Container css={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 100px)',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center'
        }}>
          <Text h1>No hay favoritos</Text>
        </Container>
      )}

    </Layout>
  )
}