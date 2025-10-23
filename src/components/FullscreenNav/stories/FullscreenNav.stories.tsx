import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ElementType } from "react";
import { BrowserRouter } from "react-router-dom";
import { FullscreenNav } from "..";
import { parameters, props } from "../props";
import { defaultFullscreenNavProps } from "./fullscreenNavProps";

const meta = {
  title: "navigation/FullscreenNav",
  component: FullscreenNav,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof FullscreenNav>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    ...defaultFullscreenNavProps,
    footerLabel: "©2025 Inube",
  },
};

const WithLogo: Story = {
  args: {
    ...defaultFullscreenNavProps,
    footerLogo:
      "https://res.cloudinary.com/dqssv7qtd/image/upload/v1742589607/selsa-logo_wjo1pt.png",
  },
};

export default meta;
export { Default, WithLogo };
