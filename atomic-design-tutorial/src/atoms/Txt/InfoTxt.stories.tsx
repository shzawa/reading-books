import { ComponentMeta } from "@storybook/react";
import { InfoTxt, Txt } from ".";

const metaData: ComponentMeta<typeof Txt> = {
  title: 'atoms/Txt/InfoTxt',
  component: Txt
}
export default metaData

export const Test1 = () => <InfoTxt size="s">テキストを表示</InfoTxt>
Test1.storyName = '情報テキスト - S'

export const Test2 = () => <InfoTxt>テキストを表示</InfoTxt>
Test2.storyName = '情報テキスト - M'

export const Test3 = () => <InfoTxt size="l">テキストを表示</InfoTxt>
Test3.storyName = '情報テキスト - L'
