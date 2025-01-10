import { useState } from "react";
import { Autosuggest, IAutosuggest } from "..";

const AutosuggestController = (props: IAutosuggest) => {
  const { id, value = "", options } = props;
  const [form, setForm] = useState({ [String(id)]: value });

  const handleChange = (_name: string, newValue: string) => {
    setForm({ ...form, [String(id)]: newValue });
  };

  return (
    <Autosuggest
      {...props}
      value={form[String(id)]}
      onChange={handleChange}
      options={options}
    />
  );
};

export { AutosuggestController };
