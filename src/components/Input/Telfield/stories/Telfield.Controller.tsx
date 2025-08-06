import { useState } from "react";
import { IInput } from "../../Input";
import { Telfield } from "..";

const TelfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({ value, status });

  const validatePhoneNumber = (tel: string) => {
    const phoneRegex = /^(\+\d{1,3})?\d{7,14}$/;
    return phoneRegex.test(tel);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tel = e.target.value;
    const isValid = validatePhoneNumber(tel);
    setForm({
      value: tel,
      status: isValid || tel === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid"
      ? "Please enter a valid tel number. E.g., +1234567890 or 1234567890."
      : "";

  return (
    <Telfield
      {...rest}
      value={form.value}
      status={form.status}
      message={message}
      onChange={onChange}
    />
  );
};

export { TelfieldController };
