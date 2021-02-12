import React from 'react'
import {Box} from '../../foundation/layout/Box'
import Typography from '../../foundation/Typography'

export default function Capa() {
  return (
    <Box.Container
      flex="1"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      backgroundImage={{
        md: 'url(/images/planta2.svg), url(/images/planta1.svg)',
        xs: 'url(/images/planta-mobile2.svg), url(/images/planta-mobile1.svg)',
      }}
      backgroundRepeat="no-repeat"
      backgroundPosition={{
        md: 'left top, right top',
        xs: 'left top, right bottom',
      }}
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
