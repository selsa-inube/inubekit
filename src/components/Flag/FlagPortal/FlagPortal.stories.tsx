import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ElementType } from "react";
import { FlagPortal } from ".";
import { Button } from "../../Button";
import { FlagProvider } from "../FlagsProvider";
import { useFlag } from "../useFlag";
import { parameters, props } from "./props";

const meta = {
  title: "feedback/FlagPortal",
  component: FlagPortal,
  parameters,
  argTypes: props,
  decorators: [
    (Story: ElementType) => (
      <FlagProvider>
        <Story />
      </FlagProvider>
    ),
  ],
} satisfies Meta<typeof FlagPortal>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: () => {
    const { addFlag } = useFlag();

    const handleClick = () => {
      addFlag({
        title: "Title",
        description: "Description",
        appearance: "primary",
        duration: 100000,
      });
    };

    return <Button onClick={handleClick}>Show Message</Button>;
  },
};

export default meta;
export { Default };
