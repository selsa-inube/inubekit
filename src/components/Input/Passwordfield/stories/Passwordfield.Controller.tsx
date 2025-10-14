import { useState } from "react";
import { Passwordfield } from "..";
import { IInput } from "../../Input";

const PasswordfieldController = (props: IInput) => {
  const { value = "", ...rest } = props;
  const [form, setForm] = useState({ value });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setForm({
      value: password,
    });
  };

  return <Passwordfield {...rest} value={form.value} onChange={onChange} />;
};

export { PasswordfieldController };
