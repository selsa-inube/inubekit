import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "../props";
import { Textarea } from "..";
import { TextareaController } from "./TextareaController";

const meta = {
  title: "inputs/Textarea",
  component: Textarea,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

const Default: Story = {
  args: {
    label: "Textarea",
    name: "textarea",
    id: "textarea",
    status: "pending",
    size: "wide",
    placeholder: "Storybook Textarea",
    disabled: false,
    fullwidth: false,
    required: true,
    maxLength: 250,
    minLength: 50,
    value:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
  },
  render: (args) => <TextareaController {...args} />,
};

export default meta;
export { Default };
