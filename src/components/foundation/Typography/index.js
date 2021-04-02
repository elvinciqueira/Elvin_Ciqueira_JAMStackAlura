import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import {Link} from '../../common/Link'
import {propToStyle} from '../../../theme/utils/propToStyle/index'
import {TextStyleVariants} from './TextStyleVariants'

const TextBase = styled('span')`
  ${({variant}) => TextStyleVariants[variant]}
  color: ${({theme, color}) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
  ${propToStyle('fontSize')}
`

export default function Typography({
  tag,
  variant,
  children,
  href,
  className,
  ...rest
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        className={className}
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
    <TextBase as={tag} className={className} variant={variant} {...rest}>
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
  href: PropTypes.string,
  tag: PropTypes.oneOf([
    'h1',
    'div',
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
    'bodyText',
  ]),
}
