import { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

const Level = {
  1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6'
} as const
type LevelType = {[P in keyof typeof Level]: P}[keyof typeof Level]
type HeadingLevelType = typeof Level[keyof typeof Level]

type HeadingPresenterProps = Omit<HeadingProps, 'level'> & {
  tag: HeadingLevelType
}
export const HeadingPresenter: React.VFC<HeadingPresenterProps> = ({
  tag: Tag,
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    className={[styles.h, styles[`h${visualLevel}`], className].join(' ')}
    {...props}
  />
)

export const HeadingUnderlinedPresenter: React.VFC<HeadingPresenterProps> = ({
  tag: Tag,
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    className={[styles.h, styles.underlined, styles[`h${visualLevel}`], className].join(' ')}
    {...props}
  />
)

type HeadingContainerProps = HeadingProps & {
  presenter: React.VFC<HeadingPresenterProps>
}
export const HeadingContainer: React.VFC<HeadingContainerProps> = ({
  presenter,
  level = 2,
  visualLevel,
  ...props
}) => {
  const changedVisualLevel = (typeof visualLevel === 'undefined') ? level : visualLevel
  const tag: HeadingLevelType = `h${level}`
  return presenter({tag, visualLevel: changedVisualLevel, ...props})
}

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: LevelType
  visualLevel?: LevelType
}
export const Heading: React.VFC<HeadingProps> = props => (
  <HeadingContainer presenter={
      (presenterProps) => (
      <HeadingPresenter {...presenterProps} />
    )}
    {...props}
  />
)
export const HeadingUnderLined: React.VFC<HeadingProps> = props => (
  <HeadingContainer presenter={
      (presenterProps) => (
      <HeadingUnderlinedPresenter {...presenterProps} />
    )}
    {...props}
  />
)
