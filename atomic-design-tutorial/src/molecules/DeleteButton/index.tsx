import { HTMLAttributes } from 'react'
import { Balloon } from '../../atoms/Balloon'
import { TrashCanIcon } from '../../atoms/Icon/Index'
import styles from './styles.module.scss'

export type DeleteButtonProps = HTMLAttributes<HTMLSpanElement>
export const DeleteButton: React.VFC<DeleteButtonProps> = ({ onClick, className, ...props }) => (
  <span className={[styles.root, className].join((' '))} {...props}>
    <TrashCanIcon onClick={onClick} />
    <Balloon>削除する</Balloon>
  </span>
)
