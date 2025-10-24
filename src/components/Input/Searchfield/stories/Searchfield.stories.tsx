import { Meta, StoryObj } from "@storybook/react-vite";
import { SearchfieldController } from "./Searchfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const meta = {
  title: "Inputs/Input/Search",
  component: SearchfieldController,
  parameters,
  argTypes: props,
} satisfies Meta<IInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    disabled: false,
    fullwidth: false,
    id: "Search",
    label: "Search",
    placeholder: "Type something...",
    required: true,
    type: "search",
    size: "wide",
    status: "pending",
  },
};

export default meta;
export { Default };
