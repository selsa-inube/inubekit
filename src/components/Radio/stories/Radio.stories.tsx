import { IRadio } from "..";
import { RadioController } from "./Radio.Controller";
import { parameters, props } from "../props";

const story = {
  title: "Inputs/Radio",
  component: RadioController,
  parameters,
  argTypes: props,
};

const Default = (args: IRadio) => <RadioController {...args} />;

Default.args = {
  id: "radio1",
  label: "Label",
  name: "radioGroup",
  checked: false,
  disabled: false,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
    console.log(`Radio value: ${e.target.value}`),
};

export { Default };
export default story;
