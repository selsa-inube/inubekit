import { StoryFn } from "@storybook/react-vite";
import { BrowserRouter } from "react-router-dom";
import { IMenuHeading, MenuHeading } from ".";
import { props } from "./props";
import { JSX } from "react/jsx-runtime";
import { ElementType } from "react";

const story = {
  title: "navigation/Menu/MenuHeading",
  components: [MenuHeading],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<IMenuHeading> = (
  args: JSX.IntrinsicAttributes & IMenuHeading,
) => <MenuHeading {...args} />;
Default.args = {
  title: "Title",
};

export default story;
