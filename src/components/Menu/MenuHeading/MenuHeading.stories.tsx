import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import { IMenuHeading, MenuHeading } from ".";
import { props } from "./props";

const meta = {
  title: "navigation/Menu/MenuHeading",
  component: MenuHeading,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenuHeading>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: "Title",
  },
};

export default meta;
export { Default };
