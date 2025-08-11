import React from "react";
import { Stack } from "../Stack";
import { Label } from "../Label";
import { Text } from "../Text";
import { StyledInput, StyledLabel, StyledSpan } from "./styles";

interface IRadio {
  checked?: boolean;
  disabled?: boolean;
  id: string;
  label?: string;
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value: string;
}

const Radio = (props: IRadio) => {
  const {
    checked = false,
    disabled = false,
    id,
    label,
    name,
    onChange,
    required = false,
    value,
  } = props;
  return (
    <Stack direction="row" alignItems="center" gap="10px" width="fit-content">
      <StyledLabel>
        <StyledInput
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
        <StyledSpan disabled={disabled} />
      </StyledLabel>
      {label && (
        <Label htmlFor={id} disabled={disabled}>
          <Stack as="span" direction="row" alignItems="center" gap="4px">
            {label}
            {required && (
              <Text type="label" appearance="danger" size="small">
                *
              </Text>
            )}
          </Stack>
        </Label>
      )}
    </Stack>
  );
};

export { Radio };
export type { IRadio };
