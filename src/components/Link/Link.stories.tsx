import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, ILink } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "navigation/Link",
  component: Link,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<ILink>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    children: "Link",
    path: "/",
    rel: "noopener noreferrer",
    size: "large",
    target: "_self",
    type: "body",
  },
};

export default meta;
export { Default };
