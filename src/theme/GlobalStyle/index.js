import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => theme.fontFamily};
  }
  ${normalize}

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
