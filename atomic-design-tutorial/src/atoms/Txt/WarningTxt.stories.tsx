import { ComponentMeta } from "@storybook/react";
import { InfoTxt, Txt, WarningTxt } from ".";

const metaData: ComponentMeta<typeof Txt> = {
  title: 'atoms/Txt/WarningTxt',
  component: Txt
}
export default metaData

export const Test1 = () => <WarningTxt size="s">テキストを表示</WarningTxt>
Test1.storyName = '警告テキスト - S'

export const Test2 = () => <WarningTxt>テキストを表示</WarningTxt>
Test2.storyName = '警告テキスト - M'

export const Test3 = () => <WarningTxt size="l">テキストを表示</WarningTxt>
Test3.storyName = '警告テキスト - L'
