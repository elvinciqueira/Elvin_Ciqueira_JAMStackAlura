import {propToStyle} from './'

describe('propToStyle()', () => {
  describe('when receives a simple argument', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign')
      //<Typography textAlign="center" />
      const componentProps = {textAlign: 'center'}
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual(componentProps)
    })

    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex')
      //<Box flex=1 />
      const componentProps = {flex: 1}
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toEqual(componentProps)
    })
  })

  describe('when receiver an argument with breakpoints', () => {
    test('should render only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign')
      //<Typography textAlign="center" />
      const componentProps = {textAlign: {xs: 'center'}}
      const styleResult = propToStyleResult(componentProps)
      expect(styleResult).toMatchInlineSnapshot(`
        Array [
          "@media only screen and (min-width:",
          "0",
          "px){",
          "text-align: center;",
          "}",
        ]
      `)
    })

    test('should renders two or more breakpoint resolutions', () => {
      const propToStyleResult = propToStyle('textAlign')
      //<Typography textAlign="center" />
      const componentProps = {
        textAlign: {xs: 'center', sm: 'left', md: 'right'},
      }
      const styleResult = propToStyleResult(componentProps)

      expect(styleResult).toMatchInlineSnapshot(`
        Array [
          "@media only screen and (min-width:",
          "0",
          "px){",
          "text-align: center;",
          "}",
          "@media only screen and (min-width:",
          "480",
          "px){",
          "text-align: left;",
          "}",
          "@media only screen and (min-width:",
          "768",
          "px){",
          "text-align: right;",
          "}",
        ]
      `)
    })
  })
})
