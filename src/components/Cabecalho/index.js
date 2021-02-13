import React from 'react'
import styled, {css} from 'styled-components'
import {lighten} from 'polished'
import get from 'lodash/get'
import Logo from '../../theme/Logo'
import {breakPointsMedia} from '../../theme/utils/breakPointsMedia'
import Typography, {TextStyleVariants} from '../foundation/Typography'

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: space-evenly;
`

const NavBar = styled.nav`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({theme}) => get(theme, 'colors.text.main.color')};
    margin-right: 32px;
    transition: 200ms ease-in-out;
    ${breakPointsMedia({
      xs: css`
        ${TextStyleVariants.xs}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: ${({theme}) => lighten(0.3, get(theme, 'colors.text.main.color'))};
    }
  }
`

export default function Cabecalho() {
  return (
    <ContentWrapper>
      <Logo />
      <NavBar>
        {[
          {url: '/sobre', name: 'Sobre Mim'},
          {url: '/contato', name: 'Contato'},
        ].map(({url, name}) => (
          <li key={url}>
            <Typography variant="paragraph1" tag="a" href={url}>
              {name}
            </Typography>
          </li>
        ))}
      </NavBar>
    </ContentWrapper>
  )
}
