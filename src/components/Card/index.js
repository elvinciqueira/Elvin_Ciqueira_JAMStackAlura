import React from 'react'
import PropTypes from 'prop-types'
import {Grid} from '../foundation/layout/Grid'
import Cards from './Cards'

export default function Card({cards}) {
  return (
    <Grid.Container>
      <Grid.Row>
        {cards.map((card) => (
          <Grid.Col key={card.title} value={{xs: 12, md: 4}}>
            <Cards {...card} />
          </Grid.Col>
        ))}
      </Grid.Row>
    </Grid.Container>
  )
}

Card.propTypes = {
  cards: PropTypes.array.isRequired,
}
