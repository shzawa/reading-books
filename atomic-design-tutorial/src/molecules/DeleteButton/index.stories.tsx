import { ComponentMeta } from "@storybook/react"
import { DeleteButton } from "."
import {action} from "@storybook/addon-actions";
import { withStyle } from "../../components/utils/decorators";

const metaData: ComponentMeta<typeof DeleteButton> = {
  title: "molecules/DeleteButton",
  component: DeleteButton
}
export default metaData

// { margin: 50px } はこのコンポーネントには直接関係無いため、敢えて withStyle() を使用している
export const Test1 = () => withStyle({margin: '50px'})(<DeleteButton onClick={action('削除ボタンがクリックされました')} />)
Test1.storyName = "デフォルト"
