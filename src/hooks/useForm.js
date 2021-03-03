import React from 'react'

const useForm = (callback) => {
  const [values, setValues] = React.useState({
    message: '',
    name: '',
    email: '',
  })

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    callback()
  }

  const handleChange = (event) => {
    event.persist()
    const fieldName = event.target.getAttribute('name')

    setValues((state) => ({...state, [fieldName]: event.target.value}))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export {useForm}
