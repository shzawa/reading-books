import NextImage, { ImageProps } from 'next/image'

export const Img: React.VFC<ImageProps> = props => (
  <NextImage {...props} />
)
