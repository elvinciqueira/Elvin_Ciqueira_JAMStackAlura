import React from 'react'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import TextField from '../../forms/TextField'
import Typography from '../../foundation/Typography'
import {Button} from '../../common/Button'

function FormContent() {
  return (
    <form style={{width: '100%'}}>
      <Box display="flex" alignItems="center" margin="0 0 32px 0">
        <Typography as="h1" title="subTitle" style={{margin: '0 auto'}}>
          ENVIE SUA MENSAGEM
        </Typography>
        <Button type="button">x</Button>
      </Box>

      <div>
        <TextField
          name="name"
          label="Seu nome"
          id="name"
          tag="input"
          onChange={() => {}}
        />
      </div>
      <div>
        <TextField
          type="email"
          name="email"
          label="Seu email"
          id="email"
          tag="input"
          onChange={() => {}}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="message"
          label="Sua mensagem"
          id="message"
          tag="textarea"
          onChange={() => {}}
        />
      </div>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography as="h1" title="subTitle" style={{marginRight: '12px'}}>
          ENVIAR
        </Typography>
        <Button type="submit">></Button>
      </Box>
    </form>
  )
}

export default function FormContato({propsDoModal}) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="center">
      <Grid.Col
        display="flex"
        paddingRight={{md: '0'}}
        flex={1}
        value={{xs: 12, md: 6, lg: 6}}
      >
        <Box
          width="100%"
          boxShadow="0px 1px 25px 5px rgba(0, 0, 0, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="8px"
          flex={1}
          padding={{
            xs: '16px',
            md: '32px 32px',
          }}
          backgroundColor="#fff"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}
