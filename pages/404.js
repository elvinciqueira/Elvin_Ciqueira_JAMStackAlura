import React from 'react'
import Cabecalho from '../src/components/Cabecalho'
import SectionDivider from '../src/components/common/SectionDivider'
import Footer from '../src/components/Footer'
import {Box} from '../src/components/foundation/layout/Box'
import Typography from '../src/components/foundation/Typography'

export default function FourOhFour() {
  return (
    <>
      <SectionDivider>
        <Cabecalho />
      </SectionDivider>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        backgroundImage="url(images/planta-opacity-2.svg), url(images/circle.svg) , url(images/planta-opacity-1.svg)"
        backgroundPosition="left top, center, right top"
        height="100vh"
        backgroundRepeat="no-repeat"
      >
        <Box backgroundColor="#fff" borderTheme padding="1rem">
          <Typography as="h1" variant="title" textAlign="center">
            404
          </Typography>
          <Typography as="p" variant="paragraph1" textAlign="center">
            Página não encontrada
          </Typography>
        </Box>
      </Box>

      <SectionDivider>
        <Footer />
      </SectionDivider>
    </>
  )
}
