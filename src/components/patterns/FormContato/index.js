import React from 'react'
// eslint-disable-next-line import/no-unresolved
import {Lottie} from '@crello/react-lottie'

import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import TextField from '../../forms/TextField'
import Typography from '../../foundation/Typography'
import {Button} from '../../common/Button'
import {useForm} from '../../../infra/hooks/forms/userForm'
import {contactService} from '../../../services/contact/contactService'
// eslint-disable-next-line import/extensions
import errorAnimation from './animation/error.json'
// eslint-disable-next-line import/extensions
import successAnimation from './animation/success.json'

const formStates = {
  DEFAULT: 'DEFAULT',
  ERROR: 'ERROR',
  LOADING: 'LOADING',
  DONE: 'DONE',
}

export function FormContent({onClose, onSubmit}) {
  const initialValues = {
    message: '',
    email: '',
    name: '',
  }

  const [isFormSubmited, setIsFormSubmited] = React.useState(false)
  const [submissionStatus, setSubmissionStatus] = React.useState(
    formStates.DEFAULT,
  )

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      const {message, email, name} = values

      setIsFormSubmited(true)

      contactService
        .execute({
          name,
          email,
          message,
        })
        .then((response) => {
          setSubmissionStatus(formStates.DONE)

          console.log('json', response)
        })
        .catch((error) => {
          setSubmissionStatus(formStates.ERROR)

          console.log(error)
        })
    },
  })

  const isFormValid =
    form.values.email.length === 0 ||
    form.values.name.length === 0 ||
    form.values.message.length === 0

  return (
    <form style={{width: '100%'}} onSubmit={onSubmit || form.handleSubmit}>
      <Box display="flex" alignItems="center" margin="0 0 32px 0">
        <Typography as="h1" title="subTitle" style={{margin: '0 auto'}}>
          ENVIE SUA MENSAGEM
        </Typography>
        <Button type="button" onClick={() => onClose()}>
          {'x'}
        </Button>
      </Box>

      <div>
        <TextField
          name="name"
          value={form.values.name}
          label="Seu nome"
          id="name"
          tag="input"
          onChange={form.handleChange}
        />
      </div>
      <div>
        <TextField
          type="email"
          name="email"
          value={form.values.email}
          label="Seu email"
          id="email"
          tag="input"
          onChange={form.handleChange}
        />
      </div>
      <div>
        <TextField
          type="text"
          name="message"
          values={form.values.message}
          label="Sua mensagem"
          id="message"
          tag="textarea"
          onChange={form.handleChange}
        />
      </div>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography as="h1" title="subTitle" style={{marginRight: '12px'}}>
          ENVIAR
        </Typography>
        <Button type="submit" disabled={isFormValid}>
          {'>'}
        </Button>
      </Box>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center" margin="16px 0">
          <Lottie
            width="150px"
            height="150px"
            config={{
              animationData: successAnimation,
              loop: true,
              autoplay: true,
            }}
          />
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center" margin="16px 0">
          <Lottie
            width="150px"
            height="150px"
            config={{animationData: errorAnimation, loop: true, autoplay: true}}
          />
        </Box>
      )}
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
          <FormContent onClose={propsDoModal.onClose} />
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}
