import React from 'react'

import {Box} from '../../foundation/layout/Box'
import {Button} from '../../common/Button'
import WrapperProjetos from '../../WrapperProjetos'
import SectionTitle from '../../SectionTitle'
import Card from '../../Card'
import Typography from '../../foundation/Typography'
import {useWebsitePageContext} from '../../wrappers/WebsitePage'

export default function HomeScreen({projects}) {
  const {toggleModal} = useWebsitePageContext()

  return (
    <>
      <WrapperProjetos>
        <SectionTitle margin="32px 0">
          <Typography as="h1" variant="title" textAlign="center">
            Meus Projetos
          </Typography>
        </SectionTitle>
        <Card cards={projects} />
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
