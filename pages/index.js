/* eslint-disable import/extensions */
/* eslint-disable require-await */
import React from 'react'
import HomeScreen from '../src/components/screens/HomeScreen'
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc'
import data from '../db.json'

function HomePage({projects}) {
  return <HomeScreen projects={projects} />
}

export default websitePageHOC(HomePage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
})

export async function getStaticProps() {
  return {
    props: data,
  }
}
