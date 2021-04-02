import React from 'react'

const useForm = ({initialValues, onSubmit}) => {
  const [values, setValues] = React.useState(initialValues)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    onSubmit(values)
  }

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name')
    const {value} = event.target

    setValues((state) => ({...state, [fieldName]: value}))
  }

  return {
    handleChange,
    handleSubmit,
    values,
  }
}

export {useForm}
