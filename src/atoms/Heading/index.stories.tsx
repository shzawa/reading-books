import { ComponentMeta } from "@storybook/react";
import { Heading, HeadingUnderLined } from ".";

const metaData: ComponentMeta<typeof Heading> = {
  title: 'atoms/Heading',
  component: Heading
}
export default metaData

export const Test1 = () => <Heading>見出し</Heading>
Test1.storyName = 'デフォルト3文字'

export const Test2 = () => <Heading level={1}>見出しレベル1</Heading>
Test2.storyName = 'レベル1'

export const Test3 = () => <Heading level={1} visualLevel={2}>見出しレベル1、見た目2</Heading>
Test3.storyName = 'レベル2'

export const Test4 = () => <HeadingUnderLined>下線付き</HeadingUnderLined>
Test4.storyName = '下線付き'

export const Test5 = () => <HeadingUnderLined level={1}>下線付き 見出しレベル1</HeadingUnderLined>
Test5.storyName = '下線付き レベル1'

export const Test6 = () => <HeadingUnderLined level={1} visualLevel={2}>下線付き 見出しレベル1、見た目2</HeadingUnderLined>
Test6.storyName = '下線付き 見出しレベル1、見た目2'
