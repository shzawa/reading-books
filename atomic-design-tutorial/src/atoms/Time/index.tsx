import { TimeHTMLAttributes } from "react";
import _isValid from "date-fns/isValid";
import _format from 'date-fns/format'
import ja from 'date-fns/locale/ja'

type TimePresenterProps = TimeHTMLAttributes<HTMLElement>
export const TimePresenter: React.VFC<TimePresenterProps> = props => <time {...props} />

type TimeContainerProps = Omit<TimePresenterProps, 'children'> & {
  presenter: React.VFC<TimePresenterProps>
  format?: string
  children: string | number
}
export const TimeContainer: React.VFC<TimeContainerProps> = ({
  presenter,
  children: value,
  dateTime,
  format = 'MM月dd日(E)HH:mm',
  ...props
}) => {
  const unitTime = parseInt(`${value}`, 10) * 1000
  const children = isValid(unitTime) ? formatDatetime(unitTime, format) : '有効な時間表現ではありません'

  // 有効な時間表現でない場合は、dateTime属性を非表示
  if (!dateTime && !isValid(unitTime)) {
    return presenter({ children,...props})
  }

  const formattedDateTime = dateTime ? dateTime : formatDatetime(unitTime)
  return presenter({ children, dateTime: formattedDateTime, ...props })
}

export const Time: React.VFC<Omit<TimeContainerProps, 'presenter'>> = props => (
  <TimeContainer
    presenter={presenterProps => <TimePresenter {...presenterProps} />}
    {...props}
  />
)

function isValid(unixTime: number) {
  return _isValid(unixTime)
}

function formatDatetime(datetime: number, format = "yyyy-MM-dd'T'HH:mm") {
  return _format(Math.floor(datetime / 1000), format, {locale: ja})
}
