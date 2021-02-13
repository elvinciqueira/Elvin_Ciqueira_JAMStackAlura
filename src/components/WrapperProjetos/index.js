import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '../foundation/layout/Box'

export default function WrapperProjetos({children}) {
  return (
    <Box
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {children}
    </Box>
  )
}

WrapperProjetos.propTypes = {
  children: PropTypes.node.isRequired,
}
