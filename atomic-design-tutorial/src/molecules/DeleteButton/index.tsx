import { HTMLAttributes } from 'react'
import { Balloon } from '../../atoms/Balloon'
import { TrashCanIcon } from '../../atoms/Icon/Index'
import styles from './styles.module.scss'

type DeleteButtonProps = HTMLAttributes<HTMLSpanElement>
export const DeleteButton: React.VFC<DeleteButtonProps> = ({ className, ...props }) => (
  <span className={[styles.root, className].join((' '))} {...props}>
    <TrashCanIcon />
    <Balloon>削除する</Balloon>
  </span>
)
