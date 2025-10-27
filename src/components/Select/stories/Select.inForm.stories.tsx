import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "..";
import { InForm } from "./Select.form.Controller";
import { props, parameters } from "../props";

const meta = {
  title: "Inputs/Select",
  component: Select,
  parameters,
  argTypes: {
    ...props,
    onChange: { action: "Select" },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const SelectInForm: Story = {
  args: {
    label: "Country",
    name: "country",
    id: "country",
    placeholder: "Select your country",
    value: "",
    required: true,
    disabled: false,
    invalid: false,
    options: [
      { id: "col", label: "Colombia", value: "colombia" },
      {
        id: "usa",
        label: "United States of America",
        value: "united-states-of-america",
      },
      { id: "per", label: "Peru", value: "peru" },
    ],
    size: "compact",
    fullwidth: false,
    onChange: () => {},
  },
  render: (args) => <InForm {...args} />,
};

export default meta;
export { SelectInForm };
