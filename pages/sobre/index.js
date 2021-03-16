import React from 'react'
import styled, {css} from 'styled-components'
import SectionDivider from '../../src/components/common/SectionDivider'
import Cabecalho from '../../src/components/Cabecalho'
import Footer from '../../src/components/Footer'
import SectionTitle from '../../src/components/SectionTitle'
import {Box} from '../../src/components/foundation/layout/Box'
import {Grid} from '../../src/components/foundation/layout/Grid'
import Typography from '../../src/components/foundation/Typography'
import Modal from '../../src/components/common/Modal'
import {Button} from '../../src/components/common/Button'
import FormContato from '../../src/components/patterns/FormContato'
import {breakPointsMedia} from '../../src/theme/utils/breakPointsMedia'

const Img = styled.img`
  ${breakPointsMedia({
    xs: css`
      height: 200px;
    `,
    md: css`
      height: 380px;
    `,
  })}
  border: 2px solid ${({theme}) => theme.colors.borders.main.color};
`

export default function Sobre() {
  const [isModalOpen, setModalState] = React.useState(false)

  const handleModalOpen = () => setModalState(!isModalOpen)

  const handleOnClose = () => setModalState(false)

  return (
    <Box>
      <SectionDivider>
        <Cabecalho />
      </SectionDivider>

      <Modal isOpen={isModalOpen} onClose={handleOnClose}>
        {(propsDoModal) => <FormContato propsDoModal={propsDoModal} />}
      </Modal>

      <SectionTitle>
        <Typography
          as="h1"
          variant="title"
          textAlign="center"
          fontSize={{xs: '2rem', md: '3rem'}}
        >
          Sobre Mim
        </Typography>
      </SectionTitle>

      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        backgroundImage="url(images/planta-opacity-2.svg), url(images/planta-opacity-1.svg)"
        backgroundPosition="left top, right top"
        height="100vh"
        backgroundRepeat="no-repeat"
      >
        <Img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt="Mary Elizabeth"
        />

        <Box
          margin="32px 0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Button type="button" onClick={handleModalOpen}>
            +
          </Button>
        </Box>
      </Box>

      <Grid.Container>
        <Grid.Row justifyContent="center">
          <Grid.Col value={{xs: 12, md: 4}}>
            <Typography as="p" variant="bodyText" textAlign="left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque odio quasi vero illo sint repudiandae molestias,
              tempore non. Fuga dolor quo amet dicta repellendus officia error
              asperiores incidunt ipsa dolorem. Deserunt iste modi voluptatum
              doloremque molestiae corrupti ipsam nemo excepturi dolores, unde
              doloribus ad. Commodi tempora, eveniet, mollitia optio saepe sunt
              ducimus tenetur fugiat natus labore deleniti beatae reiciendis
              eum.
            </Typography>
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 4}}>
            <Typography
              as="p"
              variant="bodyText"
              textAlign={{xs: 'left', md: 'right'}}
              margin={{xs: '16px 0', md: '0'}}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque odio quasi vero illo sint repudiandae molestias,
              tempore non. Fuga dolor quo amet dicta repellendus officia error
              asperiores incidunt ipsa dolorem. Deserunt iste modi voluptatum
              doloremque molestiae corrupti ipsam nemo excepturi dolores, unde
              doloribus ad. Commodi tempora, eveniet, mollitia optio saepe sunt
              ducimus tenetur fugiat natus labore deleniti beatae reiciendis
              eum.
            </Typography>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <SectionTitle>
        <Typography
          as="h1"
          variant="title"
          textAlign="center"
          fontSize={{xs: '2rem', md: '3rem'}}
        >
          Meus Repositórios
        </Typography>
      </SectionTitle>

      <Grid.Container>
        <Grid.Row justifyContent="center" marginBottom="32px">
          <Grid.Col value={{xs: 12, md: 6}}>
            <Typography
              as="p"
              variant="subTitle2"
              textAlign="left"
              margin="0 0 16px 0"
              fontSize={{xs: '1.50rem'}}
            >
              Projeto Report
            </Typography>
            <Typography
              as="a"
              variant="bodyText"
              href="github"
              textAlign="left"
              fontSize={{xs: '1rem'}}
            >
              Projeto Report
            </Typography>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <SectionDivider>
        <Footer />
      </SectionDivider>
    </Box>
  )
}
