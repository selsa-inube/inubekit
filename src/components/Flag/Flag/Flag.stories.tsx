import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ElementType } from "react";
import { Flag } from ".";
import { FlagProvider } from "../FlagsProvider";
import { parameters, props } from "./props";

const meta = {
  title: "feedback/Flag",
  component: Flag,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <FlagProvider>
        <Story />
      </FlagProvider>
    ),
  ],
} satisfies Meta<typeof Flag>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    id: "flag-1",
    title: "Title",
    description: "Description",
    appearance: "primary",
    duration: 10000,
  },
};

export default meta;
export { Default };
