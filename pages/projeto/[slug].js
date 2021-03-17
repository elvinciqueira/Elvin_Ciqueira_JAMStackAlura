/* eslint-disable import/extensions */
import React from 'react'
import data from '../../db.json'
import ProjectScreen from '../../src/components/screens/ProjectScreen'

import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function ProjectPage({image, title, description, link}) {
  return (
    <ProjectScreen
      image={image}
      title={title}
      description={description}
      link={link}
    />
  )
}

export default websitePageHOC(ProjectPage)

export function getStaticProps({params}) {
  const pageData = data.projects.find((project) => {
    if (params.slug === project.link) {
      return true
    }

    return false
  })

  return {
    props: {
      ...pageData,
      pageWrapperProps: {
        capaProps: {
          display: false,
        },
        seoProps: {
          headTitle: pageData.title,
        },
      },
    },
  }
}

export function getStaticPaths() {
  const paths = data.projects.map((projects) => ({
    params: {slug: projects.link},
  }))

  return {
    paths,
    fallback: false,
  }
}
