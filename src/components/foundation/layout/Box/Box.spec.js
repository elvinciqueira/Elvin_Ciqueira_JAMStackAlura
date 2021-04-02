/* eslint-disable no-undef */
import React from 'react'

import {Box} from './'

describe('<Box />', () => {
  test('it renders', () => {
    const tree = rendererCreateWithTheme(<Box />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('width and height props set width/height', () => {
    const tree = rendererCreateWithTheme(
      <Box width="50%" height="50%" />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '50%')
    expect(tree).toHaveStyleRule('height', '50%')
  })
})
