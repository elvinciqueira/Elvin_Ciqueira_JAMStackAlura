import SobreScreen from '../../src/components/screens/SobreScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    capaProps: {
      display: false,
    },
  },
})
