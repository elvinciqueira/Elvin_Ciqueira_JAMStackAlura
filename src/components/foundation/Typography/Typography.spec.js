/* eslint-disable no-undef */
import React from 'react'
import Typography from './index'

describe('<Typography />', () => {
  describe('when component renders', () => {
    test('textAlign props sets text-align', () => {
      const tree = rendererCreateWithTheme(
        <Typography textAlign="center" />,
      ).toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('text-align', 'center')
    })
  })
})
