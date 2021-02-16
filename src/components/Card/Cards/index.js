import React from 'react'
import styled, {css} from 'styled-components'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import {Box} from '../../foundation/layout/Box'
import {breakPointsMedia} from '../../../theme/utils/breakPointsMedia'
import CardTitle from '../CardTitle'

const CardContainer = styled.div`
  border: 1px solid ${({theme}) => get(theme, 'colors.borders.main.color')};
  margin-bottom: 32px;
  cursor: pointer;
  position: relative;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
  }

  ${({isDestaque}) => {
    if (isDestaque) {
      return breakPointsMedia({
        xs: css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `,
        md: css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `,
      })
    }
  }}
`

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`

const CardText = styled.div`
  font-family: 'Fira Sans Condensed', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
  color: #000;

  ${({isDestaque}) => {
    if (isDestaque) {
      return breakPointsMedia({
        xs: css`
          display: none;
        `,
        md: css`
          display: block;
        `,
      })
    }
  }}
`

const CardDestaque = styled.div`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: 300;
  text-transform: capitalize;

  position: absolute;
  top: 0;
  left: 0;

  background-color: #fff;
  color: ${({theme}) => get(theme, 'colors.text.main.color')};

  border: 1px solid ${({theme}) => get(theme, 'colors.text.main.color')};
  padding: 0.1rem 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;

  ${breakPointsMedia({
    xs: css`
      font-size: 1.5rem;
      line-height: 1.8rem;
    `,
    md: css`
      font-size: 2.375rem;
      line-height: 2.85rem;
    `,
  })}
`

export default function Cards({src, title, text, destaque}) {
  return (
    <CardContainer isDestaque={destaque}>
      <CardImage src={src} alt={title} />
      <Box width={{xs: '100%', md: destaque ? '30%' : '100%'}}>
        {destaque && <CardDestaque>Destaque</CardDestaque>}

        <CardTitle>{title}</CardTitle>

        {destaque && <CardText isDestaque={destaque}>{text}</CardText>}
      </Box>
    </CardContainer>
  )
}

Cards.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  destaque: PropTypes.bool.isRequired,
}
