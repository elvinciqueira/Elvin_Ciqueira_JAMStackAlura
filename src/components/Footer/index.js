import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

const icons = [
  {
    url: '/',
    alt: 'Twitter',
    icon: '/icons/twitter.svg',
  },
  {
    url: 'https://github.com/elvinciqueira',
    alt: 'Github',
    icon: '/icons/github.svg',
  },
  {
    url: '/',
    alt: 'Medium',
    icon: '/icons/medium.svg',
  },
]

const Container = styled.div`
  background-color: ${({theme}) => get(theme, 'colors.primary.main.color')};
  padding: 12px;

  a:nth-child(2) {
    margin-right: 32px;
    margin-left: 32px;
  }
`

export default function Footer() {
  return (
    <Container>
      {icons.map(({url, alt, icon}) => (
        <a key={alt} href={url}>
          <img alt={alt} src={icon} />
        </a>
      ))}
    </Container>
  )
}
