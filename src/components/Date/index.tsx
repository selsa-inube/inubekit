import { useContext, useState } from "react";
import { MdOutlineWarning } from "react-icons/md";

import { Text } from "../Text";
import { ITextAppearance } from "../Text/props";
import { Label } from "../Label";
import { Icon } from "../Icon";

import { IDateSize, IDateStatus } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
} from "./styles";
import { ThemeContext } from "styled-components";
import { tokens as InputTokens } from "../Input/tokens";

interface IDate {
  label?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  status?: IDateStatus;
  message?: string;
  size?: IDateSize;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focused?: boolean;
}

const Date = (props: IDate) => {
  const {
    label,
    name,
    id,
    disabled = false,
    value,
    onChange,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
  } = props;

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error(`Error executing focus callback. ${error}`);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error(`Error executing blur callback. ${error}`);
    }
  };

  const interceptOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  const theme = useContext(ThemeContext) as { input: typeof InputTokens };
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    InputTokens.required.appearance;
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    InputTokens.message.appearance;

  return (
    <StyledContainer $fullwidth={fullwidth} $disabled={disabled}>
      <StyledContainerLabel
        $alignItems="center"
        $wrap="wrap"
        $size={size}
        $disabled={disabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={focused}
            invalid={status === "invalid" ? true : false}
            size={size === "compact" ? "medium" : "large"}
            margin="0px 0px 0px 16px"
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text
            type="body"
            size="small"
            appearance={requiredAppearance}
            margin="0px 0px 0px 4px"
            textAlign={"center"}
          >
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        $disabled={disabled}
        $focused={focused}
        $status={status}
        $size={size}
      >
        <StyledInput
          label={label}
          name={name}
          id={id}
          $disabled={disabled}
          type="date"
          value={value}
          $required={required}
          $size={size}
          $status={status}
          $fullwidth={fullwidth}
          $focused={focused}
          onChange={interceptOnChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
        />
      </StyledInputContainer>

      {status === "invalid" && !disabled && message && (
        <StyledMessageContainer>
          <Icon appearance={messageAppearance} icon={<MdOutlineWarning />} />
          <Text
            type="body"
            size="small"
            textAlign="start"
            margin="8px 0px 0px 4px"
            appearance={messageAppearance}
          >
            {message}
          </Text>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};

export { Date };
export type { IDate };
