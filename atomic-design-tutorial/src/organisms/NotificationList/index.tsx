import { HTMLAttributes } from 'react'
import { Notification, Program } from '../Notification'
import styles from './styles.module.scss'

type NotificationListProps = HTMLAttributes<HTMLDivElement> & {
  programs: Program[]
  onClickDelete: (...args: any[]) => void
}
export const NotificationList: React.VFC<NotificationListProps> = ({
  programs,
  onClickDelete,
  ...props
}) => (
  <div {...props}>
    {programs.map((program, idx) => (
      <Notification
        key={idx}
        className={styles.item}
        program={program}
        onClickDelete={onClickDelete}
      />
    ))}
  </div>
)
