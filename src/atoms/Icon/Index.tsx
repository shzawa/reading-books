import NextImage, { ImageProps } from 'next/image'
import styles from './styles.module.scss'

export const TrashCanIcon: React.VFC<Omit<ImageProps, 'src'>> = ({
  height = 20,
  width = 20,
  className = '',
  onClick,
  ...props
}) => {
  if (onClick) className += ` ${styles.clickable}`
  return (
    <NextImage
      src={'/icons/trash-can.svg'}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      {...props}
    />
  )
}
