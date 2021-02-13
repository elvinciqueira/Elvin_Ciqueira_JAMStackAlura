import React from 'react'
import {Box} from '../foundation/layout/Box'
import Typography from '../foundation/Typography'

const text = [
  {
    tag: 'h1',
    variant: 'title',
    children: 'Mary Elizabeth',
    textAlign: 'center',
    margin: 0,
  },
  {
    tag: 'h2',
    variant: 'subTitle',
    children: 'Portfolio',
    textAlign: 'center',
    margin: 0,
  },
]

export default function Capa() {
  return (
    <Box.Container
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {text.map(({tag, variant, textAlign, margin, children}) => (
        <Typography
          key={tag}
          tag={tag}
          variant={variant}
          textAlign={textAlign}
          margin={margin}
        >
          {children}
        </Typography>
      ))}
    </Box.Container>
  )
}
