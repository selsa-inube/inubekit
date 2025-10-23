import type { Meta, StoryObj } from "@storybook/react-vite";
import { props, parameters } from "../props";
import { AutosuggestController } from "./Autosuggest.Controller";

const meta = {
  title: "Inputs/Autosuggest",
  component: AutosuggestController,
  parameters,
  argTypes: props,
} satisfies Meta<typeof AutosuggestController>;

type Story = StoryObj<typeof meta>;

const optionsMock = [
  { id: "us", label: "United States", value: "united-states" },
  { id: "ca", label: "Canada", value: "canada" },
  { id: "mx", label: "Mexico", value: "mexico" },
  { id: "gb", label: "United Kingdom", value: "united-kingdom" },
  { id: "fr", label: "France", value: "france" },
  { id: "de", label: "Germany", value: "germany" },
  { id: "jp", label: "Japan", value: "japan" },
  { id: "co", label: "Colombia", value: "colombia" },
  { id: "cn", label: "China", value: "china" },
  { id: "br", label: "Brazil", value: "brazil" },
];

const Default: Story = {
  args: {
    label: "Country",
    name: "autocomplete",
    id: "autocomplete",
    placeholder: "Please type something...",
    value: "",
    disabled: false,
    options: optionsMock,
    required: false,
    size: "wide",
    fullwidth: false,
    onChange: () => {},
  },
};

export default meta;
export { Default };
