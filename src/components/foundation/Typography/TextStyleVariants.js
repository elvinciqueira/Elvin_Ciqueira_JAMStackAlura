import {css} from 'styled-components'

const paragraph1 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    font-family: ${theme.typographyVariants.paragraph1.fontFamily};
  `}
`

const title = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    font-family: ${theme.typographyVariants.title.fontFamily};
    text-transform: ${theme.typographyVariants.title.textTransform};
  `}
`

const subTitle = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    font-family: ${theme.typographyVariants.subTitle.fontFamily};
  `}
`

const bodyText = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.bodyText.fontSize};
    font-weight: ${theme.typographyVariants.bodyText.fontWeight};
    font-family: ${theme.typographyVariants.bodyText.fontFamily};
  `}
`

const subTitle2 = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.subTitle2.fontSize};
    font-weight: ${theme.typographyVariants.subTitle2.fontWeight};
    font-family: ${theme.typographyVariants.subTitle2.fontFamily};
  `}
`

const xs = css`
  ${({theme}) => css`
    font-size: ${theme.typographyVariants.xs.fontSize};
    font-weight: ${theme.typographyVariants.xs.fontWeight};
    font-family: ${theme.typographyVariants.xs.fontFamily};
  `}
`

export const TextStyleVariants = {
  paragraph1,
  title,
  subTitle,
  subTitle2,
  xs,
  bodyText,
}
