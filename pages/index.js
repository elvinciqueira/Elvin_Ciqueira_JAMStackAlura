import React from 'react'
import Capa from '../src/components/Capa'
import Cabecalho from '../src/components/Cabecalho'
import WrapperProjetos from '../src/components/WrapperProjetos'
import SectionDivider from '../src/components/common/SectionDivider'
import SectionTitle from '../src/components/SectionTitle'
import Card from '../src/components/Card'

export default function Home() {
  return (
    <>
      <Capa />

      <SectionDivider>
        <Cabecalho />
      </SectionDivider>

      <WrapperProjetos>
        <SectionTitle>Meus Projetos</SectionTitle>

        <Card />
      </WrapperProjetos>
    </>
  )
}
