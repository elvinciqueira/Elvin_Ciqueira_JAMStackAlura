import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Typography from '../../foundation/Typography'

const InputWrapper = styled.div`
  margin-bottom: 17px;
`

const Input = styled(Typography)`
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.borders.main.color};
  padding: 8px 16px;
  outline: 0;
  margin-top: 8px;
  border-radius: 4px;
`

Input.defaultProps = {
  tag: 'input',
  variant: 'bodyText',
}

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  type,
  id,
  tag,
  label,
}) {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <Input
        tag={tag}
        id={id}
        type={type || 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  )
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  tag: PropTypes.string,
}
