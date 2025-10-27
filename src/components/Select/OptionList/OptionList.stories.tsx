import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "./props";
import { OptionList } from "./index";
import { OptionItem } from "../OptionItem";

const options = [
  { id: "1", label: "Item 1", value: "item-1" },
  { id: "2", label: "Item 2", value: "item-2" },
  { id: "3", label: "Item 3", value: "item-3" },
];

const meta = {
  title: "Inputs/Select/OptionList",
  component: OptionList,
  parameters,
  argTypes: props,
} satisfies Meta<typeof OptionList>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => (
    <div style={{ position: "relative" }}>
      <OptionList {...args}>
        {options.map((optionItem) => (
          <OptionItem
            key={optionItem.id}
            id={optionItem.id}
            label={optionItem.label}
          />
        ))}
      </OptionList>
    </div>
  ),
  args: {
    children: [],
    options: options,
    onOptionClick: (value: string) => console.log("Option clicked:", value),
  },
};

export default meta;
export { Default };
