import { HTMLAttributes } from 'react'
import styles from './styles.module.scss'

export const Balloon: React.VFC<HTMLAttributes<HTMLSpanElement>> = ({ children, className, ...props }) => (
  <span className={[styles.balloon, className].join(' ')} {...props}>{children}</span>
)
