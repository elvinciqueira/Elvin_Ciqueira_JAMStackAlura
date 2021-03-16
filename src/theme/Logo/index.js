import React from 'react'
import styled, {css} from 'styled-components'
import {breakPointsMedia} from '../utils/breakPointsMedia'
import {Link} from '../../components/common/Link'

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
  return (
    <Link href="/">
      <Img src="images/Logo.svg" alt="Logo" />
    </Link>
  )
}
