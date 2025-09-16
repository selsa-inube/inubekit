import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { Meta, StoryObj } from "@storybook/react";
import { props } from "./props";
import { Button, IButton } from ".";
import { ElementType } from "react";

const meta = {
  title: "inputs/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Button help people take action, such as sending an email, sharing a document, or liking a comment.",
      },
    },
  },
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IButton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    children: "Button",
    appearance: "primary",
    path: "/privilege",
    iconAfter: <MdAdd />,
    loading: false,
    disabled: false,
    type: "button",
    spacing: "wide",
    variant: "filled",
    fullwidth: false,
    onClick: () => console.log("clicked from Default-story"),
    cursorHover: false,
    parentHover: false,
  },
};

export default meta;
export { Default };
