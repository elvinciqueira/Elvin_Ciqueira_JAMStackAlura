import React from 'react'
import {Grid} from '../foundation/layout/Grid'
import Cards from './Cards'

export default function Card({cards}) {
  return (
    <Grid.Container>
      <Grid.Row>
        {cards.map((card) => {
          return (
            <Grid.Col
              key={card.id}
              value={{xs: 12, md: card.destaque ? 12 : 4}}
              order={{xs: card.destaque, md: card.destaque}}
            >
              <Cards {...card} />
            </Grid.Col>
          )
        })}
      </Grid.Row>
    </Grid.Container>
  )
}
