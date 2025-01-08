import { Stack } from "../../Stack";
import { Fieldset, IFieldset } from "..";
import { props, parameters } from "../props";
import { StyledChildren } from "./styles";

const story = {
  component: Fieldset,
  title: "inputs/Fieldset",
  tags: ["autodocs"],
  parameters,
  argTypes: {
    ...props,
  },
};

const Default = (args: IFieldset) => (
  <Stack>
    <Fieldset {...args}>
      <StyledChildren />
    </Fieldset>
  </Stack>
);

Default.args = {
  legend: "User Information",
  spacing: "wide",
  width: "100%",
  height: "100%",
};

export { Default };
export default story;
