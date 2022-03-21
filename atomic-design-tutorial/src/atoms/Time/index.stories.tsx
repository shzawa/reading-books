import { ComponentMeta } from "@storybook/react";
import { Time } from ".";

const metaData: ComponentMeta<typeof Time> = {
  title: 'atoms/Time',
  component: Time
}
export default metaData

export const Test1 = () => <Time>1507032000000</Time>
Test1.storyName = "デフォルト"

export const Test2 = () => <Time format="HH:mm">1507032000000</Time>
Test2.storyName = "HH:mm"

export const Test3 = () => <Time>無効な時間表現</Time>
Test3.storyName = "無効な時間表現"

