import type { Meta, StoryObj } from "@storybook/react-vite";
import { parameters, props } from "../props";
import { CheckpickerController } from "./Checkpicker.controller";

const options = Array.from({ length: 20 }, (_, i) => ({
  id: `option-${i + 1}`,
  label: `Option ${i + 1}`,
  value: `option-${i + 1}`,
}));

const meta = {
  title: "Inputs/Checkpicker",
  component: CheckpickerController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof CheckpickerController>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    label: "Country",
    name: "country",
    id: "countryId",
    placeholder: "Select your country",
    disabled: false,
    options: options,
    required: false,
    size: "wide",
    fullwidth: false,
    values: "",
    onChange: () => {},
  },
};

export default meta;
export { Default };
