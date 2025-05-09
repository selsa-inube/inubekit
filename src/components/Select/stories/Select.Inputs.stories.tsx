import { ISelect } from "..";
import { props, parameters } from "../props";
import { InFormInput } from "./Select.formInputs.Controller";

const story = {
  title: "Inputs/Select",
  component: [InFormInput],
  parameters,
  argTypes: {
    ...props,
    onchange: { action: "Select" },
  },
};

const options = [
  { id: "col", label: "Colombia", value: "colombia" },
  {
    id: "usa",
    label: "United States of America",
    value: "united-states-of-america",
  },
  { id: "per", label: "Peru", value: "peru" },
];

const SelectInputs = (args: ISelect) => <InFormInput {...args} />;

SelectInputs.args = {
  label: "Country",
  name: "country",
  id: "id",
  placeholder: "Select your country",
  value: "",
  disabled: false,
  options: options,
  required: false,
  size: "wide",
  fullwidth: false,
};

export default story;
export { SelectInputs };
