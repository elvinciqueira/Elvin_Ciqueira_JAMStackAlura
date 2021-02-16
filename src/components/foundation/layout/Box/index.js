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
`
