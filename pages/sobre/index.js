/* eslint-disable import/extensions */
/* eslint-disable require-await */
import SobreScreen from '../../src/components/screens/SobreScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'
import data from '../../db.json'

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    capaProps: {
      display: false,
    },
    seoProps: {
      headTitle: 'Sobre Mim',
    },
  },
})

export async function getStaticProps() {
  return {
    props: data,
  }
}
