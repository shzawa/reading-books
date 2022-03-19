import { ComponentMeta, Story } from "@storybook/react";
import {action} from "@storybook/addon-actions";
import { TrashCanIcon } from "./Index";

const metaData: ComponentMeta<typeof TrashCanIcon> = {
  title: 'atoms/Icon/TrashCanIcon',
  component: TrashCanIcon,
}
export default metaData

export const Test1 = () => <TrashCanIcon />
Test1.storyName = 'TrashCanIcon'

const Test2Template: Story<{message: string}> = ({message = 'アイコンがクリックされました'}) => (
  <TrashCanIcon onClick={action(message)} />
)
export const Test2 = Test2Template.bind({})
Test2.args = {
  message: 'アイコンがクリックされました',
}
Test2.storyName = 'クリッカブル'
