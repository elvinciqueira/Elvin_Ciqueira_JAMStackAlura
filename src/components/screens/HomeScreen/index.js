import React from 'react'

import {Box} from '../../foundation/layout/Box'
import {Button} from '../../common/Button'
import WrapperProjetos from '../../WrapperProjetos'
import SectionTitle from '../../SectionTitle'
import Card from '../../Card'
import Typography from '../../foundation/Typography'
import {useWebsitePageContext} from '../../wrappers/WebsitePage'

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

export default function HomeScreen() {
  const {toggleModal} = useWebsitePageContext()

  return (
    <>
      <WrapperProjetos>
        <SectionTitle margin="32px 0">
          <Typography as="h1" variant="title" textAlign="center">
            Meus Projetos
          </Typography>
        </SectionTitle>
        <Card cards={cards} />
      </WrapperProjetos>

      <Box
        margin="32px 0"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography as="h2" variant="subTitle" textAlign="center">
          Entre em contato
        </Typography>

        <Button type="button" onClick={toggleModal}>
          +
        </Button>
      </Box>
    </>
  )
}
