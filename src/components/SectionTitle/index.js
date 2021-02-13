import React from 'react'
import PropTypes from 'prop-types'

export default function SectionTitle({children}) {
  return <section>{children}</section>
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}
