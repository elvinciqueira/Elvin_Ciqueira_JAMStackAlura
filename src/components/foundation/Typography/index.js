import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {Link} from '../../common/Link'
import {propToStyle} from '../../../theme/utils/propToStyle'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    font-family: ${theme.typographyVariants.paragraph1.fontFamily};
  `}
`

const title = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    font-family: ${theme.typographyVariants.title.fontFamily};
    text-transform: ${theme.typographyVariants.title.textTransform};
  `}
`

const subTitle = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    font-family: ${theme.typographyVariants.subTitle.fontFamily};
  `}
`

const subTitle2 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle2.fontSize};
    font-weight: ${theme.typographyVariants.subTitle2.fontWeight};
    font-family: ${theme.typographyVariants.subTitle2.fontFamily};
  `}
`

const xs = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.xs.fontSize};
    font-weight: ${theme.typographyVariants.xs.fontWeight};
    font-family: ${theme.typographyVariants.xs.fontFamily};
  `}
`

export const TextStyleVariants = {
  paragraph1,
  title,
  subTitle,
  subTitle2,
  xs,
}

const TextBase = styled.span`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`

export default function Typography({tag, variant, children, href, ...rest}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        {children}
      </TextBase>
    )
  }

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
  children: PropTypes.node,
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'p',
    'li',
    'a',
    'span',
    'input',
    'textarea',
  ]),
  variant: PropTypes.oneOf([
    'paragraph1',
    'title',
    'XS',
    'subTitle',
    'subTitle2',
  ]),
}
