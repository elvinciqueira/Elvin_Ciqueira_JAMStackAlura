import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {lighten} from 'polished'
import get from 'lodash/get'

const StyledLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  ${({theme, color}) =>
    color
      ? `color: ${get(theme, `colors.${color}.color`)}`
      : 'color: inherit;'};
  transition: 200ms ease-in-out;
  &:hover,
  &:focus {
    font-weight: 500;
    color: ${({theme}) => lighten(0.3, get(theme, 'colors.text.main.color'))};
  }
`

export const Link = ({href, children, ...props}) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
)

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
