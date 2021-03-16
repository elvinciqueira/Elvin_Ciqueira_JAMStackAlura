import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../Footer'
import Cabecalho from '../../Cabecalho'
import Capa from '../../Capa'
import Modal from '../../common/Modal'
import FormContato from '../../patterns/FormContato'
import {Box} from '../../foundation/layout/Box'
import SectionDivider from '../../common/SectionDivider'

WebsitePageWrapper.defaultProps = {
  pageBoxProps: {},
  capaProps: {
    display: true,
  },
}

WebsitePageWrapper.propTypes = {
  capaProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
}

const WebsitePageContext = React.createContext({
  toggleModal: () => {},
})

function WebsitePageWrapper({children, capaProps, pageBoxProps}) {
  const [isModalOpen, setModalState] = React.useState(false)

  const toggleModal = () => setModalState(!isModalOpen)

  return (
    <WebsitePageContext.Provider value={{toggleModal}}>
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

export {WebsitePageWrapper, useWebsitePageContext}
