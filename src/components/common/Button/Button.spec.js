/* eslint-disable no-undef */
import React from 'react'
import {Button} from './'

test('it renders', () => {
  const tree = rendererCreateWithTheme(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('font-weight', 'bold')
})
