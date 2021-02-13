import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../foundation/Typography'

export default function SectionTitle({children}) {
  return (
    <Typography as="h1" variant="title">
      {children}
    </Typography>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}
