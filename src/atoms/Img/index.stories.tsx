import { ComponentMeta } from "@storybook/react";
import { Img } from ".";

const metaData: ComponentMeta<typeof Img> = {
  title: "atoms/Img",
  component: Img
}
export default metaData

export const Test1 = () => <Img src="/images/img01.jpg" width={128} height={72} />
Test1.storyName = "デフォルト"
