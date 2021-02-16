import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Typography from '../../foundation/Typography'

const Container = styled.div`
  margin: 32px;
`

export default function CardTitle({children}) {
  return (
    <Container>
      <Typography as="h3" variant="subTitle2" textAlign="center">
        {children}
      </Typography>
    </Container>
  )
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
}
