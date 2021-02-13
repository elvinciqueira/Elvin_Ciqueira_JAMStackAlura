import React from 'react'
import Capa from '../src/components/Capa'
import Cabecalho from '../src/components/Cabecalho'
import WrapperProjetos from '../src/components/WrapperProjetos'
import SectionDivider from '../src/components/common/SectionDivider'
import SectionTitle from '../src/components/SectionTitle'
import Card from '../src/components/Card'
import Footer from '../src/components/Footer'
import Typography from '../src/components/foundation/Typography'

export default function Home() {
  return (
    <>
      <Capa />

      <SectionDivider>
        <Cabecalho />
      </SectionDivider>

      <WrapperProjetos>
        <SectionTitle>
          <Typography as="h1" variant="title" textAlign="center">
            Meus Projetos
          </Typography>
        </SectionTitle>
        <Card />
      </WrapperProjetos>

      <SectionDivider>
        <Footer />
      </SectionDivider>
    </>
  )
}
