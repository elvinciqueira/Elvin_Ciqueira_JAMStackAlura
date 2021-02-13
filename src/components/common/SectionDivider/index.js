import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid ${({theme}) => get(theme, `colors.borders.main.color`)};
  background-color: ${({theme}) => get(theme, `colors.background.main.color`)};
`

export default function SectionDivider({children}) {
  return <Container>{children}</Container>
}

SectionDivider.propTypes = {
  children: PropTypes.node.isRequired,
}
