import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { parameters, props } from "./props";
import { BreadcrumbMenuLink } from ".";
import { ElementType } from "react";

const meta = {
  title: "navigation/Breadcrumbs/BreadcrumbMenuLink",
  component: BreadcrumbMenuLink,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof BreadcrumbMenuLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Privileges",
    path: "/privileges",
    id: "privileges",
    size: "large",
  },
};
