import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import {Box} from '../../foundation/layout/Box'
import CardTitle from '../CardTitle'
import {Link} from '../../common/Link'

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
`

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  padding: 0 !important;
`

export default function Cards({image, title, link}) {
  return (
    <Link href={`/projeto/${link}`}>
      <CardContainer>
        <CardImage src={image} alt={title} />
        <Box width={{xs: '100%', md: '100%'}}>
          <CardTitle>{title}</CardTitle>
        </Box>
      </CardContainer>
    </Link>
  )
}

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
