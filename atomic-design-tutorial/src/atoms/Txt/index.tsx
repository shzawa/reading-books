import { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

const tags = ['p', 'span'] as const
type TagType = typeof tags[number]

const roles = ['default', 'info', 'warning'] as const
type RoleType = typeof roles[number]

const sizes = ['s', 'm', 'l'] as const
type SizeType = typeof sizes[number]

type TxtFactoryProps = HTMLAttributes<HTMLParagraphElement> & {
  tag?: TagType
  size?: SizeType
}
const txtFactory: (role: RoleType) => (props: TxtFactoryProps) => JSX.Element
  = (role: RoleType) => function Txt({
  tag: Tag = 'p',
  size = 'm',
  className,
  ...props
  }) {
    return (
      <Tag
        className={[styles[role], styles[size], className].join(' ')}
        {...props}
      />
    )
  }

export const Txt = txtFactory('default')
export const InfoTxt = txtFactory('info')
export const WarningTxt = txtFactory('warning')
