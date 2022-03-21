import { ComponentMeta } from "@storybook/react";
import { Txt } from ".";

const metaData: ComponentMeta<typeof Txt> = {
  title: 'atoms/Txt/Txt',
  component: Txt
}
export default metaData

export const Test1 = () => <Txt size="s">テキストを表示</Txt>
Test1.storyName = 'テキスト - S'

export const Test2 = () => <Txt>テキストを表示</Txt>
Test2.storyName = 'テキスト - M'

export const Test3 = () => <Txt size="l">テキストを表示</Txt>
Test3.storyName = 'テキスト - L'
