import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { ElementType } from "react";
import { parameters, props } from "./props";
import { BreadcrumbEllipsis } from "./index";

const meta = {
  title: "navigation/Breadcrumbs/BreadcrumbEllipsis",
  component: BreadcrumbEllipsis,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof BreadcrumbEllipsis>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    routes: [
      {
        label: "Privileges",
        path: "/privileges",
        id: "privileges",
      },
      { label: "Users", path: "/users", id: "users" },
      {
        label: "User edition",
        path: "users/edition",
        id: "usersEdition",
      },
    ],
    size: "large",
  },
};

export default meta;
export { Default };
