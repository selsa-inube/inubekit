import type { Meta, StoryObj } from "@storybook/react-vite";
import { Fieldset } from "..";
import { props, parameters } from "../props";
import { StyledChildren } from "./styles";

const meta = {
  title: "inputs/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
  parameters,
  argTypes: props,
} satisfies Meta<typeof Fieldset>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    legend: "User Information",
    spacing: "wide",
    width: "100%",
    height: "100%",
    children: <StyledChildren />,
  },
};

export default meta;
export { Default };
