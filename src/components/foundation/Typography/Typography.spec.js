/* eslint-disable no-undef */
import React from 'react'
import Typography from './index'

describe('<Typography />', () => {
  describe('when component renders', () => {
    test('it applies default styles', () => {
      const tree = rendererCreateWithTheme(<Typography />).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('font-size', '1.75rem')
      expect(tree).toHaveStyleRule('font-weight', '400')
      expect(tree).toHaveStyleRule(
        'font-family',
        'Fira Sans Condensed,sans-serif',
      )
    })

    test('textAlign props sets text-align', () => {
      const tree = rendererCreateWithTheme(
        <Typography textAlign="center" />,
      ).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('text-align', 'center')
    })

    test('margin props sets margin', () => {
      const tree = rendererCreateWithTheme(
        <Typography margin="20px" />,
      ).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('margin', '20px')
    })

    test('fontSize props sets font-size', () => {
      const tree = rendererCreateWithTheme(
        <Typography fontSize="1rem" />,
      ).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('font-size', '1rem')
    })
  })
})
