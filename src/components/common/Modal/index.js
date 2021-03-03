import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {motion} from 'framer-motion'

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: 0.3s;
  z-index: 100;

  ${({isOpen}) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `
    }
    return css`
      opacity: 0;
      pointer-events: none;
    `
  }}
`

export default function Modal({isOpen, children, onClose}) {
  const variants = {
    open: {y: 0},
    closed: {y: '100%'},
  }

  const handleOnClick = (event) => {
    const isSafeArea = event.target.closest('[data-modal-safe-area="true"]')

    if (!isSafeArea) {
      onClose()
    }
  }

  return (
    <ModalWrapper isOpen={isOpen} onClick={handleOnClick}>
      <motion.div
        variants={variants}
        transition={{duration: 0.6}}
        animate={isOpen ? 'open' : 'closed'}
        style={{display: 'flex', flex: 1}}
      >
        {children({
          'data-modal-safe-area': 'true',
          onClose,
        })}
      </motion.div>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
