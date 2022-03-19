import { ComponentMeta } from '@storybook/react';
import { Balloon } from ".";

const metaData: ComponentMeta<typeof Balloon> = {
  title: "atoms/Balloon",
  component: Balloon,
}
export default metaData

export const Test1 = () => <Balloon>次へ</Balloon>
Test1.storyName = '2文字ラベル'

export const Test2 = () => <Balloon>削除する</Balloon>
Test2.storyName = '4文字ラベル'

export const Test3 = () => <Balloon style={{position: 'absolute', top: '200px', left: '200px'}}>左上から200pxに配置</Balloon>
Test3.storyName = '左上から200pxに配置'
