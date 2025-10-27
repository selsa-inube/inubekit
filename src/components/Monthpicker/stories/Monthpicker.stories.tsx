import type { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props } from "../props";
import { MonthpickerController } from "./MonthpickerController";

const meta = {
  title: "Inputs/Monthpicker",
  component: MonthpickerController,
  parameters,
  argTypes: {
    ...props,
  },
} satisfies Meta<typeof MonthpickerController>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    start: 0,
    end: 11,
    locales: "es-ES",
    order: "asc",
    placeholder: "Meses",
    value: "",
  },
};
