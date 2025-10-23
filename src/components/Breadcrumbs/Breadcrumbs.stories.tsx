import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";

import { parameters, props } from "./props";
import { Breadcrumbs } from ".";

const meta = {
  title: "navigation/Breadcrumbs",
  component: Breadcrumbs,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    crumbs: [
      {
        path: "/home",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/home/users",
        label: "Usuarios",
        id: "/home/users",
        isActive: false,
      },
      {
        path: "/home/users/invitation",
        label: "Invitación",
        id: "/home/users/invitation",
        isActive: false,
      },
      {
        path: "/home/users/invitation/edition",
        label: "Edición",
        id: "/home/users/invitation/edition",
        isActive: false,
      },
      {
        path: "/home/users/invitation/branches",
        label: "Ramas",
        id: "/home/users/invitation/branches",
        isActive: false,
      },
      {
        path: "/home/users/invitation/Branches/city",
        label: "Ciudad",
        id: "/home/users/invitation/Branches/city",
        isActive: true,
      },
    ],
  },
};
