import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { ElementType } from "react";
import { parameters, props } from "./props";
import { BreadcrumbLink } from ".";

const meta = {
  title: "navigation/Breadcrumbs/BreadcrumbLink",
  component: BreadcrumbLink,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof BreadcrumbLink>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    label: "Privileges",
    path: "/privileges",
    id: "privileges",
    size: "large",
  },
};

export default meta;
export { Default };
