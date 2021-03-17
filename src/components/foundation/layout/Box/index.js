import styled from 'styled-components'
import {propToStyle} from '../../../../theme/utils/propToStyle'

export const Box = styled.div`
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexWrap')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('marginRight')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('boxShadow')}
  ${propToStyle('borderRadius')}

  ${({theme, borderTheme}) =>
    borderTheme && `border: 1px solid ${theme.colors.borders.main.color}`}
`
