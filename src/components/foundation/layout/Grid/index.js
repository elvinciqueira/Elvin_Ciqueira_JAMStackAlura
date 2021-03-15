import styled, {css} from 'styled-components'
import {breakPointsMedia} from '../../../../theme/utils/breakPointsMedia'
import {propToStyle} from '../../../../theme/utils/propToStyle'

const Col = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  order: 2;
  img {
    display: block;
    margin: 0 auto;
    padding: 1rem;
  }
  ${({order}) => {
    if (typeof order === 'undefined') {
      return css``
    }
    return breakPointsMedia({
      ...(order.xs && {
        xs: css`
          order: 1;
        `,
      }),
      ...(order.md && {
        md: css`
          order: 3;
        `,
      }),
    })
  }}
  ${({value}) => {
    if (typeof value === 'undefined') {
      return css``
    }
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `
    }
    return breakPointsMedia({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
      ...(value.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    })
  }}
  ${({offset}) => {
    if (typeof offset === 'undefined') {
      return css``
    }
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `
    }
    return breakPointsMedia({
      ...(offset.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset.sm && {
        sm: css`
          margin-left: ${(100 * offset.sm) / 12}%;
        `,
      }),
      ...(offset.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
        `,
      }),
      ...(offset.lg && {
        lg: css`
          margin-left: ${(100 * offset.lg) / 12}%;
        `,
      }),
      ...(offset.xl && {
        xl: css`
          margin-left: ${(100 * offset.xl) / 12}%;
        `,
      }),
    })
  }}

  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('marginTop')}
  ${propToStyle('paddingRight')}
  ${propToStyle('flex')}
`

const Container = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  ${breakPointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    `,
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 1rem;
      padding-left: 1rem;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;

  ${propToStyle('flex')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('justifyContent')}
`

export const Grid = {
  Container,
  Row,
  Col,
}

Col.defaultProps = {
  value: {},
  offset: {},
}
