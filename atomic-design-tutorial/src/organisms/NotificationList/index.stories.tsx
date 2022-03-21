import { ComponentMeta } from "@storybook/react";
import { NotificationList } from ".";
import { action } from '@storybook/addon-actions'

const metaData: ComponentMeta<typeof NotificationList> = {
  title: "organisms/NotificationList",
  component: NotificationList,
}
export default metaData

const notifications = [{
  id: 1,
  thumbnail: '/images/img01.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第1話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000,
}, {
  id: 2,
  thumbnail: '/images/img02.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第2話',
  channelName: 'UI チャンネル',
  startAt: 1507035600000,
  endAt: 1507039200000,
}, {
  id: 3,
  thumbnail: '/images/img01.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第1話',
  channelName: 'UI チャンネル',
  startAt: 1507032000000,
  endAt: 1507035600000,
}, {
  id: 4,
  thumbnail: '/images/img02.jpg',
  title: 'コンポーネント指向で UI を設計しよう！第2話',
  channelName: 'UI チャンネル',
  startAt: 1507035600000,
  endAt: 1507039200000,
}]

export const Test1  = () => <NotificationList programs={notifications} onClickDelete={action('削除ボタンがクリックされました')} />
