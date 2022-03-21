import { Component, DetailsHTMLAttributes } from "react"
import { Heading } from "../../atoms/Heading"
import { Img } from "../../atoms/Img"
import { Time } from "../../atoms/Time"
import { InfoTxt } from "../../atoms/Txt"
import { DeleteButton, DeleteButtonProps } from "../../molecules/DeleteButton"
import styles from './styles.module.scss'

export type Program = {
  thumbnail: string // TODO: Union Type
  channelName: string
  title: string
  startAt: string | number
  endAt: string | number
}

type NotificationContainerProps = {
  program: Program,
  onClickDelete: (...args: any[]) => void
  presenter: React.VFC<Omit<NotificationContainerProps, 'presenter'>>
}
export class NotificationContainer extends Component<NotificationContainerProps, {}> {
  constructor(props: NotificationContainerProps) {
    super(props)
    this.onClickDelete = this.onClickDelete.bind(this, props.program)
  }

  render() {
    const { presenter, ...props } = this.props

    const onClickDelete = this.onClickDelete
    const presenterProps = {...props, onClickDelete }
    return presenter(presenterProps)
  }

  onClickDelete(...args: any[]) {
    const { onClickDelete } = this.props;
    if (onClickDelete) {
      onClickDelete(...args);
    }
  }
}

type NotificationPresenterProps = DetailsHTMLAttributes<HTMLElement> & {
  program: Program
  onClickDelete: ((...args: any[]) => void)
}
export const NotificationPresenter: React.VFC<NotificationPresenterProps> = ({
  program,
  className,
  onClickDelete,
  ...props
}) => (
  <section className={[styles.root, className].join(' ')} {...props}>
    <div>
      <Img src={program.thumbnail} className={styles.media} width={160} height={90} />
    </div>
    <div className={styles.body}>
      <Heading level={3} visualLevel={6} className={styles.heading}>{program.title}</Heading>
      <InfoTxt size="s" className={styles.channelName}>{ program.channelName}</InfoTxt>
      <InfoTxt size="s" className={styles.time}>
        <Time format="MM月dd日(E)HH:mm">{program.startAt}</Time>
        {' ~ '}
        <Time format="HH:mm">{program.endAt}</Time>
      </InfoTxt>
      <DeleteButton onClick={onClickDelete} className={styles.del} />
    </div>
  </section>
)

export const Notification: React.VFC<NotificationPresenterProps> = ({ onClickDelete, ...props }) => (
  <NotificationContainer
    presenter={presenterProps => <NotificationPresenter {...presenterProps} />}
    {...{onClickDelete, ...props}}
    />
)
