import type { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props as tableProps } from "../props";
import { TableController } from "./Table.Controller";

const meta = {
  title: "data/Table",
  component: TableController,
  parameters,
  argTypes: tableProps,
} satisfies Meta<typeof TableController>;

type Story = StoryObj<typeof TableController>;

const Default: Story = {
  args: {
    tableLayout: "fixed",
    borderCollapse: "collapse",
    borderWidth: "1px",
    borderStyle: "solid",
  },
};

export default meta;
export { Default };
