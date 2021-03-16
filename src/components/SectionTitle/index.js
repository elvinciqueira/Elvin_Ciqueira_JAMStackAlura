import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {propToStyle} from '../../theme/utils/propToStyle'

const Container = styled.section`
  ${propToStyle('margin')};
`

export default function SectionTitle({children, ...props}) {
  return <Container {...props}>{children}</Container>
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}
