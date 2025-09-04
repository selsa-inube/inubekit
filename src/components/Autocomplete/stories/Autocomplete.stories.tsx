import { IAutocomplete } from "..";

import { props, parameters } from "../props";
import { AutocompleteController } from "./Autocomplete.controller";

const story = {
  title: "Inputs/Autocomplete",
  component: [AutocompleteController],
  parameters,
  argTypes: {
    ...props,
  },
};

const optionsMock = [
  { id: "op1", label: "Argentina", value: "option-1" },
  { id: "op2", label: "Bolivia", value: "option-2" },
  { id: "op3", label: "Brasil", value: "option-3" },
  { id: "op4", label: "Chile", value: "option-4" },
  { id: "op5", label: "Colombia", value: "option-5" },
  { id: "op6", label: "Ecuador", value: "option-6" },
  { id: "op7", label: "Guyana", value: "option-7" },
  { id: "op8", label: "Paraguay", value: "option-8" },
  { id: "op9", label: "Perú", value: "option-9" },
  { id: "op10", label: "Surinam", value: "option-10" },
  { id: "op11", label: "Uruguay", value: "option-11" },
  { id: "op12", label: "Venezuela", value: "option-12" },
];

const Default = (args: IAutocomplete) => <AutocompleteController {...args} />;

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
  invalid: false,
  message: "El campo no puede estar vacio",
};

export default story;
export { Default };
