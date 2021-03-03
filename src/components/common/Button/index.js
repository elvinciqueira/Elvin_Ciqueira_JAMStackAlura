import styled from 'styled-components'

export const Button = styled.button`
  font-weight: bold;
  font-size: 1.75rem;
  background: none;
  border: 1px solid ${({theme}) => theme.colors.borders.main.color};
  border-radius: 50%;
  height: 46px;
  width: 46px;
`
