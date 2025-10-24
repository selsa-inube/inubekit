import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { MdHouse } from "react-icons/md";
import { ElementType } from "react";
import { NavLinkController } from "./NavLink.Controller";
import { props, parameters } from "../props";
import { NavLink } from "..";

const meta = {
  title: "navigation/NavLink",
  component: NavLink,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NavLink>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => <NavLinkController {...args} />,
  args: {
    id: "privileges",
    label: "Privileges",
    path: "/privileges",
    disabled: false,
    icon: <MdHouse />,
  },
};

export default meta;
export { Default };
