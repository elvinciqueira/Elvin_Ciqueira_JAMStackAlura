import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {propToStyle} from '../../../theme/utils/propToStyle'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`

const title = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
    font-family: 'Fira Sans Condensed', sans-serif;
    text-transform: uppercase;
  `}
`

const subTitle = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
    font-family: 'Fira Sans Condensed';
  `}
`

const paragraph2 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${theme.typographyVariants.paragraph2.lineHeight};
  `}
`

export const TextStyleVariants = {
  paragraph2,
  paragraph1,
  title,
  subTitle,
}

const TextBase = styled.span`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`

export default function Typography({tag, variant, children, ...rest}) {
  return (
    <TextBase as={tag} variant={variant} {...rest}>
      {children}
    </TextBase>
  )
}

Typography.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf([
    'paragraph1',
    'smallestException',
    'title',
    'titleXS',
    'subTitle',
    'subTitle2',
  ]),
}