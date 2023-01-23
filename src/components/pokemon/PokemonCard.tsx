import { SmallPokemon } from '@/interfaces'
import { Grid, Card, Row, Text } from '@nextui-org/react'
import { FC } from 'react'

type Props = {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  return (
    <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable>
        <Card.Body css={{ p:1 }}>
          <Card.Image
            src={pokemon.img}
            alt={pokemon.name}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text># {pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}