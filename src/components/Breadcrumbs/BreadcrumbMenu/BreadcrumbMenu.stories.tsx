import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { ElementType } from "react";
import { parameters, props } from "./props";
import { BreadcrumbMenu } from ".";

const meta = {
  title: "navigation/Breadcrumbs/BreadcrumbMenu",
  component: BreadcrumbMenu,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof BreadcrumbMenu>;

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
  },
  render: (args) => (
    <div style={{ height: "100px", transform: "translateZ(0)" }}>
      <BreadcrumbMenu {...args} />
    </div>
  ),
};

export default meta;
export { Default };
