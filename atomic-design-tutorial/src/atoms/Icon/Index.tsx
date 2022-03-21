import NextImage, { ImageProps } from 'next/image'
import styles from './styles.module.scss'

type IconPresenterProps = Omit<IconContainerProps, 'presenter'>
export const IconPresenter: React.VFC<IconPresenterProps> = ({
  iconName,
  height = 20,
  width = 20,
  ...props
}) => (
  <NextImage
    src={`/icons/${iconName}.svg`}
    width={width}
    height={height}
    {...props}
  />
)

type IconContainerProps = IconProps & {
  presenter: React.VFC<IconPresenterProps>
  iconName: string
}
export const IconContainer: React.VFC<IconContainerProps> = ({
  presenter,
  onClick,
  className = '',
  ...props
}) => {
  if (onClick) className += ` ${styles.clickable}`
  return presenter({ onClick, className, ...props })
}

type IconProps = Omit<ImageProps, 'src'>
export const iconFactory: (iconName: string) => (props: IconProps) => JSX.Element = (iconName) => function Icon({onClick, ...props}) {
  return (
    <IconContainer
      presenter={presenterProps => (
          <IconPresenter {...presenterProps} />
      )}
      {...{ onClick, iconName, ...props }}
    />
  )

}

export const TrashCanIcon = iconFactory('trash-can')
export const ChevronRightIcon = iconFactory('chevron-right')
export const SearchIcon = iconFactory('search')
export const SettingsIcon = iconFactory('settings')
