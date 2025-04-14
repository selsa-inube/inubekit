import { useState } from "react";
import { Button } from "../../Button";
import { ISelect, Select } from "..";
import { Grid } from "../../Grid";
import { Textfield } from "../../Input/Textfield";
import { Stack } from "../../Stack";

interface IField {
  name: string;
  value: string;
  required: boolean;
  invalid: boolean;
  invalidMessage: string;
}

interface IFormState {
  [key: string]: IField;
}

function checkRequired(field: IField) {
  if (!field.required || Boolean(field.value)) return;
  throw new Error("Este campo es requerido");
}

function resetInvalid(field: IField) {
  field.invalid = false;
  field.invalidMessage = "";
}

function changeFieldValue(field: IField, newValue: string) {
  field.value = newValue;
}

function validateField(field: IField) {
  try {
    checkRequired(field);
    resetInvalid(field);
  } catch (error) {
    field.invalid = true;
    if (error instanceof Error) {
      field.invalidMessage = error.message;
    }
  }
}

const InFormInput = (props: ISelect) => {
  const isAlphabetical = (val: string) => /^[a-zA-Z\s]+$/.test(val);
  const { options } = props;
  const [form, setForm] = useState<IFormState>({
    username: {
      name: "username",
      value: "",
      required: true,
      invalid: false,
      invalidMessage: "",
    },
    country: {
      name: "country",
      value: "",
      required: true,
      invalid: false,
      invalidMessage: "",
    },
  });

  const [usernameStatus, setUsernameStatus] = useState<"pending" | "invalid">(
    "pending",
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const updatedForm = { ...form };
    let isFormValid = true;

    Object.keys(updatedForm).forEach((key) => {
      const field = updatedForm[key];
      validateField(field);
      if (field.invalid) isFormValid = false;
    });

    setForm(updatedForm);

    if (isFormValid) {
      console.log("Form submitted:", {
        username: form.username.value,
        country: form.country.value,
      });
    }
  }

  function handleChange(name: string, value: string) {
    const field = { ...form[name] };
    changeFieldValue(field, value);
    validateField(field);
    setForm({ ...form, [name]: field });
  }

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange("username", e.target.value);
  };

  const handleUsernameFocus = () => {
    setUsernameStatus("pending");
  };

  const handleUsernameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    setUsernameStatus(isValid ? "pending" : "invalid");
  };

  const usernameMessage =
    usernameStatus === "invalid"
      ? "Please enter only letters."
      : form.username.invalidMessage;

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" gap="16px">
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="1fr"
          gap="12px"
          alignItems="center"
        >
          <Textfield
            id="username"
            name="username"
            placeholder="Write your full name"
            label="Username"
            value={form.username.value}
            status={usernameStatus}
            message={usernameMessage}
            onChange={handleUsernameChange}
            onFocus={handleUsernameFocus}
            onBlur={handleUsernameBlur}
          />
          <Select
            {...props}
            value={form.country.value}
            required={form.country.required}
            invalid={form.country.invalid}
            message={form.country.invalidMessage}
            options={options}
            onChange={(name, value) => handleChange(name, value)}
          />
        </Grid>

        <Button type="submit" spacing="compact">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export { InFormInput };
