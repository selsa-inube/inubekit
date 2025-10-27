import type { Meta, StoryObj } from "@storybook/react-vite";
import { Col } from "../Col";
import { Colgroup } from ".";
import { parameters, props } from "./props";

const meta = {
  title: "data/Table/Colgroup",
  component: Colgroup,
  parameters,
  argTypes: props,
} satisfies Meta<typeof Colgroup>;

type Story = StoryObj<typeof Colgroup>;

const Default: Story = {
  args: {
    children: (
      <>
        <Col span={1} />
        <Col span={2} />
      </>
    ),
  },
};

export default meta;
export { Default };
