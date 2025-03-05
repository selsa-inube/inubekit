import { Label } from "../Label";
import { Stack } from "../Stack";
import { Text } from "../Text";
import { useContext } from "react";
import { MdCheck, MdRemove } from "react-icons/md";
import { ThemeContext } from "styled-components";
import {
  StyledCheckbox,
  StyledLabel,
  StyledPreventSelectableLabel,
  StyledSpan,
} from "./styles";
import { tokens } from "./tokens";

interface ICheckbox {
  id?: string;
  name?: string;
  value: string;
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: ICheckbox) => {
  const {
    id = "checkbox",
    name,
    value,
    checked = false,
    indeterminate = false,
    label,
    disabled = false,
    required = false,
    onChange,
  } = props;

  const theme = useContext(ThemeContext) as { checkbox: typeof tokens };
  const disabledAppearance =
    theme?.checkbox?.vector?.color?.disabled || tokens.vector.color.disabled;
  const indeterminateAppearance =
    theme?.checkbox?.vector?.color?.indeterminate ||
    tokens.vector.color.indeterminate;
  const checkedAppearance =
    theme?.checkbox?.vector?.color?.checked || tokens.vector.color.checked;

  return (
    <Stack direction="row" alignItems="center" gap="10px" width="fit-content">
      <StyledLabel>
        <StyledCheckbox
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked || indeterminate}
          disabled={disabled}
          required={required}
          onChange={onChange}
          ref={(el: { indeterminate: boolean }) => {
            if (el) el.indeterminate = indeterminate;
          }}
        />
        <StyledSpan
          checked={checked}
          $indeterminate={indeterminate}
          disabled={disabled}
        >
          {indeterminate ? (
            <MdRemove
              color={disabled ? disabledAppearance : indeterminateAppearance}
            />
          ) : (
            checked && (
              <MdCheck
                color={disabled ? disabledAppearance : checkedAppearance}
              />
            )
          )}
        </StyledSpan>
      </StyledLabel>
      {label && (
        <StyledPreventSelectableLabel>
          <Stack direction="row" alignItems="center" gap="4px">
            <Label htmlFor={id} disabled={disabled}>
              {label}
            </Label>
            {required && (
              <Text type="label" appearance="danger" size="small">
                *
              </Text>
            )}
          </Stack>
        </StyledPreventSelectableLabel>
      )}
    </Stack>
  );
};

export { Checkbox };
export type { ICheckbox };
