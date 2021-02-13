import React from 'react'
import {Box} from '../foundation/layout/Box'
import Typography from '../foundation/Typography'

export default function Capa() {
  return (
    <Box.Container
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography tag="h1" variant="title" textAlign="center" margin={0}>
        Mary Elizabeth
      </Typography>
      <Typography tag="h2" variant="subTitle" textAlign="center" margin={0}>
        Portfolio
      </Typography>
    </Box.Container>
  )
}
