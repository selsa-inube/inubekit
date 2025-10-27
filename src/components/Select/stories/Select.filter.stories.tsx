import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "..";
import { props } from "../props";
import { SelectControllerFilter } from "./SelectControllerFilter";

const meta = {
  title: "Inputs/Select",
  component: Select,
  argTypes: {
    ...props,
    onChange: { action: "Select" },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const options = [
  { id: "col", label: "Colombia", value: "colombia" },
  {
    id: "usa",
    label: "United States of America",
    value: "united-states-of-america",
  },
  { id: "per", label: "Peru", value: "peru" },
];

const SelectFilter: Story = {
  args: {
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
    onChange: () => {},
  },
  render: (args) => <SelectControllerFilter {...args} />,
};

export default meta;
export { SelectFilter };
