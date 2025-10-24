import { Meta, StoryObj } from "@storybook/react-vite";
import { ElementType } from "react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { MenuSection, IMenuSection } from ".";
import { MenuAction } from "../MenuAction";
import { props } from "./props";

const meta = {
  title: "navigation/Menu/MenuSection",
  component: MenuSection,
  tags: ["autodocs"],
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<IMenuSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    title: "Heading 1",
    divider: true,
    children: (
      <>
        <MenuAction
          title="Configuration"
          description="Adjust the details of your project"
          iconAfter={<MdAndroid />}
          action={() => console.log("config")}
        />
        <MenuAction
          title="Account"
          description="See your personal settings"
          iconAfter={<MdAndroid />}
          action={() => console.log("account")}
        />
      </>
    ),
  },
};

export default meta;
export { Default };
