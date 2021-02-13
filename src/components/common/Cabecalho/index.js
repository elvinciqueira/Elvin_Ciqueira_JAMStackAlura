import React from 'react'
import styled, {css} from 'styled-components'
import Logo from '../../../theme/Logo'
import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'
import Typography, {TextStyleVariants} from '../../foundation/Typography'

const CabecalhoWrapper = styled.div`
  background-color: #fff8e6;
  border-top: 3px solid #e9c46a;
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
    color: #000;
    margin-right: 32px;
    transition: 200ms ease-in-out;
    ${breakPointsMedia({
      xs: css`
        ${TextStyleVariants.paragraph2}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070c0e;
    }
  }
`

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <div>
        <Logo />
      </div>
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
    </CabecalhoWrapper>
  )
}
