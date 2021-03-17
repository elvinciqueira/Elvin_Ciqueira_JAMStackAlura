/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../Footer'
import Cabecalho from '../../Cabecalho'
import Capa from '../../Capa'
import Modal from '../../common/Modal'
import FormContato from '../../patterns/FormContato'
import {Box} from '../../foundation/layout/Box'
import SectionDivider from '../../common/SectionDivider'
import SEO from '../../common/SEO'

const WebsitePageContext = React.createContext({
  toggleModal: () => {},
})

function WebsitePageWrapper({children, capaProps, pageBoxProps, seoProps}) {
  const [isModalOpen, setModalState] = React.useState(false)

  const toggleModal = () => setModalState(!isModalOpen)

  return (
    <WebsitePageContext.Provider value={{toggleModal}}>
      <SEO {...seoProps} />

      {capaProps.display && <Capa />}

      <Box {...pageBoxProps}>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          {(propsDoModal) => <FormContato propsDoModal={propsDoModal} />}
        </Modal>

        <SectionDivider>
          <Cabecalho />
        </SectionDivider>

        {children}

        <SectionDivider>
          <Footer />
        </SectionDivider>
      </Box>
    </WebsitePageContext.Provider>
  )
}

function useWebsitePageContext() {
  const context = React.useContext(WebsitePageContext)

  return context
}

WebsitePageWrapper.defaultProps = {
  pageBoxProps: {},
  seoProps: {},
  capaProps: {
    display: true,
  },
}

WebsitePageWrapper.propTypes = {
  capaProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
}

export {WebsitePageWrapper, useWebsitePageContext}
