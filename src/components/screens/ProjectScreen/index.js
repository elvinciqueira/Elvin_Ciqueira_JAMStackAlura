import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import Typography from '../../foundation/Typography'

export default function ProjectScreen({title, description, image, link}) {
  return (
    <Box margin="64px 0">
      <Typography as="h1" variant="title" textAlign="center">
        {title}
      </Typography>

      <Grid.Container>
        <Grid.Row justifyContent="center">
          <Grid.Col value={{xs: 12, md: 6}}>
            <Box borderTheme maxWidth="fit-content">
              <Image src={image} alt={title} width="500" height="400" />
            </Box>
          </Grid.Col>
          <Grid.Col value={{xs: 12, md: 6}}>
            <Typography as="p" variant="bodyText">
              {description}
            </Typography>

            <Box marginTop="32px">
              <Typography
                as="h3"
                variant="subTitle2"
                fontSize="1.125rem"
                margin="0 0 16px 0"
              >
                Visite o site
              </Typography>
              <Typography as="a" href={link} fontSize="1rem">
                {`https://myproject.com/${link}`}
              </Typography>
            </Box>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  )
}

ProjectScreen.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
