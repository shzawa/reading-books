import { ComponentMeta } from "@storybook/react";
import { Notification } from ".";
import {action} from '@storybook/addon-actions'

const metaData: ComponentMeta<typeof Notification> = {
  title: 'organisms/Notification',
  component: Notification
}
export default metaData

const program = {
  id: 0,
  thumbnail: '/images/img01.jpg',
  title: 'コンポーネント指向でUIを設計しよう！第1話',
  channelName: 'UIチャンネル',
  startAt: 1647734400,
  endAt: 1647884400
}

export const Test1 =
  () => <Notification program={program} onClickDelete={action('削除ボタンがクリックされました')} />
Test1.storyName = 'デフォルト'
