import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "..";
import { SelectController } from "./SelectController";
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

const options = [
  { id: "col", label: "Colombia", value: "colombia" },
  {
    id: "usa",
    label: "United States of America",
    value: "united-states-of-america",
  },
  { id: "per", label: "Peru", value: "peru" },
];

const manyOptions = Array.from({ length: 20 }, (_, i) => ({
  id: `option-${i + 1}`,
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const Default: Story = {
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
    showOptions: false,
    picker: false,
    clearable: true,
    message: "El campo no puede estar vacio",
    onChange: () => {},
  },
  render: (args) => <SelectController {...args} />,
};

const WithManyOptions: Story = {
  args: {
    label: "Many Options",
    name: "manyOptions",
    id: "manyOptionsId",
    placeholder: "Select an option",
    value: "",
    disabled: false,
    options: manyOptions,
    required: false,
    size: "wide",
    fullwidth: false,
    maxItems: 5,
    clearable: false,
    onChange: () => {},
  },
  render: (args) => <SelectController {...args} />,
};

export default meta;
export { Default, WithManyOptions };
