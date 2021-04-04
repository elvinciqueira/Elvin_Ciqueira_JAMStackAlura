/* eslint-disable no-undef */
import React from 'react'
import * as theme from '../../../../theme'
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

  test('marginLeft, marginRight, marginTop, marginBottom', () => {
    const tree = rendererCreateWithTheme(
      <Box
        marginLeft="20px"
        marginRight="20px"
        marginBottom="30px"
        marginTop="10px"
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-bottom', '30px')
    expect(tree).toHaveStyleRule('margin-top', '10px')
    expect(tree).toHaveStyleRule('margin-left', '20px')
    expect(tree).toHaveStyleRule('margin-right', '20px')
  })

  test('margin props set margin', () => {
    const tree = rendererCreateWithTheme(<Box margin="40px" />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin', '40px')
  })

  test('padding props set padding', () => {
    const tree = rendererCreateWithTheme(<Box padding="40px" />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '40px')
  })

  test('boxShadow props set box-shadow', () => {
    const tree = rendererCreateWithTheme(
      <Box boxShadow="10px 5px 5px black" />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('box-shadow', '10px 5px 5px black')
  })

  test('borderRadius props set border-radius', () => {
    const tree = rendererCreateWithTheme(<Box borderRadius="8px" />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border-radius', '8px')
  })

  test('display, flex, flexDirection, flexWrap, alignItems, justifyContent', () => {
    const tree = rendererCreateWithTheme(
      <Box
        display="flex"
        flex="1"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'center')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('flex', '1')
    expect(tree).toHaveStyleRule('flex-wrap', 'wrap')
  })

  test('borderTheme props set border', () => {
    const tree = rendererCreateWithTheme(<Box borderTheme />).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borders.main.color}`,
    )
  })

  test('backgroundImage, backgroundPosition, backgroundColor, backgroundRepeat', () => {
    const tree = rendererCreateWithTheme(
      <Box
        backgroundImage="url('someimagepath')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundColor="white"
      />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background-image', "url('someimagepath')")
    expect(tree).toHaveStyleRule('background-position', 'center')
    expect(tree).toHaveStyleRule('background-repeat', 'no-repeat')
    expect(tree).toHaveStyleRule('background-color', 'white')
  })
})
