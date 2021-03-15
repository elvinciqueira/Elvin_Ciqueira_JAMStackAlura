import React from 'react'
import styled, {css} from 'styled-components'
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
    margin-right: 32px;
    ${breakPointsMedia({
      xs: css`
        ${TextStyleVariants.xs}
      `,
      md: css`
        ${TextStyleVariants.paragraph1}
      `,
    })}
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
            <Typography
              variant="paragraph1"
              tag="a"
              href={url}
              color="text.main"
            >
              {name}
            </Typography>
          </li>
        ))}
      </NavBar>
    </ContentWrapper>
  )
}
