/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

import {WebsitePageWrapper} from '../index'
import WebsiteGlobalProvider from '../providers'

export default function websitePageHOC(
  PageComponent,
  {pageWrapperProps} = {pageWrapperProps: {}},
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  )
}
