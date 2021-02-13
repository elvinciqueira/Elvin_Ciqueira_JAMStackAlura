import styled from 'styled-components'
import {propToStyle} from '../../../../theme/utils/propToStyle'

export const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundSize')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('margin')}
  ${propToStyle('padding')}
  ${propToStyle('border')}
  ${propToStyle('height')}
`
