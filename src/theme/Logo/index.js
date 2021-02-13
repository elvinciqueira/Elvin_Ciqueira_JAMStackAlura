import React from 'react'
import styled, {css} from 'styled-components'
import {breakPointsMedia} from '../utils/breakPointsMedia'

const Img = styled.img`
  ${breakPointsMedia({
    md: css`
      height: 70px;
      margin: 0;
    `,
    xs: css`
      height: 45px;
      margin-right: 32px;
    `,
  })}
`

export default function Logo() {
  return <Img src="images/Logo.svg" alt="Logo" />
}
