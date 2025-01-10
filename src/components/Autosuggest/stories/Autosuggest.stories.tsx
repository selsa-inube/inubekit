import { IAutosuggest } from "..";

import { props, parameters } from "../props";
import { AutosuggestController } from "./Autosuggest.Controller";

const story = {
  title: "Inputs/Autosuggest",
  component: [AutosuggestController],
  parameters,
  argTypes: {
    ...props,
  },
};

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

const Default = (args: IAutosuggest) => <AutosuggestController {...args} />;

Default.args = {
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
};

export default story;
export { Default };
