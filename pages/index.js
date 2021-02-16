import React from 'react'
import Capa from '../src/components/Capa'
import Cabecalho from '../src/components/Cabecalho'
import WrapperProjetos from '../src/components/WrapperProjetos'
import SectionDivider from '../src/components/common/SectionDivider'
import SectionTitle from '../src/components/SectionTitle'
import Card from '../src/components/Card'
import Footer from '../src/components/Footer'
import Typography from '../src/components/foundation/Typography'

const cards = [
  {
    id: 1,
    src: 'images/projeto1.svg',
    title: 'Projeto1',
    text: 'Teste Projeto 1',
    destaque: false,
    md: 4,
  },
  {
    id: 2,
    src: 'images/projeto3.svg',
    title: 'Projeto2',
    text: ' lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    destaque: true,
    md: 12,
  },
  {
    id: 3,
    src: 'images/projeto2.svg',
    title: 'Projeto3',
    text: 'Teste Projeto 3',
    destaque: false,
    md: 4,
  },
  {
    id: 4,
    src: 'images/projeto1.svg',
    title: 'Projeto4',
    text: 'Teste Projeto 4',
    destaque: false,
    md: 4,
  },
]

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
        <Card cards={cards} />
      </WrapperProjetos>

      <SectionDivider>
        <Footer />
      </SectionDivider>
    </>
  )
}
