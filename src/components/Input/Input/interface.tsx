import { Icon } from "../../Icon";
import { Label } from "../../Label";
import { tokens } from "../tokens";
import { Text } from "../../Text";
import { ITextAppearance } from "../../Text/props";
import { Stack } from "../../Stack";
import { MdOutlineWarning } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { useState, useContext } from "react";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledMessageContainer,
} from "./styles";
import { IInput } from ".";
import { ICounter } from "./props";

const getCounterAppearance = (
  minLength: number | undefined,
  maxLength: number | undefined,
  currentLength: number,
) => {
  if (minLength !== undefined && maxLength !== undefined) {
    if (currentLength < minLength || currentLength > maxLength) return "danger";
    if (maxLength - currentLength <= Math.floor(maxLength * 0.1))
      return "warning";
    return "gray";
  }

  if (minLength !== undefined) {
    return currentLength < minLength ? "danger" : "gray";
  }

  if (maxLength !== undefined) {
    if (currentLength > maxLength) return "danger";
    if (maxLength - currentLength <= Math.floor(maxLength * 0.1))
      return "warning";
    return "gray";
  }

  return "gray";
};

const Counter = ({ maxLength, minLength, currentLength }: ICounter) => {
  const appearance = getCounterAppearance(minLength, maxLength, currentLength);

  let denominator: number | undefined;
  if (minLength !== undefined && maxLength !== undefined) {
    denominator = currentLength < minLength ? minLength : maxLength;
  } else {
    denominator = maxLength ?? minLength;
  }

  const counterText = denominator
    ? `${currentLength}/${denominator}`
    : `${currentLength}`;

  return (
    <Text type="body" size="small" appearance={appearance} textAlign="start">
      {counterText}
    </Text>
  );
};

const InputUI = (props: IInput) => {
  const {
    disabled = false,
    fullwidth = false,
    iconAfter,
    iconBefore,
    id,
    inputMode,
    label,
    message,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyUp,
    placeholder,
    required = false,
    size = "wide",
    status = "pending",
    type,
    readOnly = false,
    value,
    maxLength,
    minLength,
    currentLength,
  } = props;

  const [focusedState, setFocused] = useState(false);

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error(`Error executing blur callback. ${error}`);
    }
  };

  const interceptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setFocused(true);
    }
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error(`Error executing focus callback. ${error}`);
    }
  };

  const interceptKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      onKeyUp && onKeyUp(e);
    } catch (error) {
      console.error(`Error executing keyUp callback. ${error}`);
    }
  };

  const theme = useContext(ThemeContext) as { input: typeof tokens };
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    tokens.required.appearance;
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    tokens.message.appearance;

  const calculatedLength =
    currentLength !== undefined
      ? currentLength
      : value
        ? value.toString().length
        : 0;
  const showRequired = required && !disabled;
  const showCounter =
    !disabled && (maxLength !== undefined || minLength !== undefined);
  const showLabel = label || (required && !disabled) || showCounter;

  return (
    <StyledContainer $disabled={disabled} $fullwidth={fullwidth} $size={size}>
      {showLabel && (
        <StyledContainerLabel
          $alignItems="center"
          $disabled={disabled}
          $size={size}
          $wrap="wrap"
        >
          <StyledLabel $fullwidth={fullwidth}>
            {label && (
              <Label
                focused={focusedState}
                htmlFor={id}
                invalid={status === "invalid"}
                margin="0px 0px 0px 16px"
                size={size === "compact" ? "medium" : "large"}
                disabled={disabled}
                ellipsis={!fullwidth}
              >
                {label}
              </Label>
            )}

            {showRequired && (
              <Text
                appearance={requiredAppearance}
                size="small"
                textAlign="center"
                type="body"
              >
                (Requerido)
              </Text>
            )}
          </StyledLabel>

          {showCounter && (
            <Stack justifyContent="flex-end" alignItems="center">
              <Counter
                maxLength={maxLength}
                minLength={minLength}
                currentLength={calculatedLength}
              />
            </Stack>
          )}
        </StyledContainerLabel>
      )}

      <StyledInputContainer
        $disabled={disabled}
        $focused={focusedState}
        $iconAfter={iconAfter}
        $iconBefore={iconBefore}
        $status={status}
        readOnly={readOnly}
      >
        {iconBefore && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={iconBefore}
            size={size === "compact" ? "18px" : "24px"}
          />
        )}

        <StyledInput
          $focused={focusedState}
          $fullwidth={fullwidth}
          $iconAfter={iconAfter}
          $iconBefore={iconBefore}
          $required={required}
          $size={size}
          $status={status}
          disabled={disabled}
          id={id}
          inputMode={inputMode}
          label={label}
          name={name}
          onBlur={interceptBlur}
          onChange={interceptChange}
          onFocus={interceptFocus}
          onKeyUp={interceptKeyUp}
          placeholder={placeholder}
          type={type}
          value={value}
          readOnly={readOnly}
          minLength={minLength}
        />

        {iconAfter && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={iconAfter}
            size={size === "compact" ? "18px" : "24px"}
          />
        )}
      </StyledInputContainer>

      {status === "invalid" && !disabled && message && (
        <StyledMessageContainer>
          <Stack alignItems="center" gap="4px" margin="5px 0 0 16px">
            <Icon
              appearance={messageAppearance}
              icon={<MdOutlineWarning />}
              size="14px"
            />
            <Text
              appearance={messageAppearance}
              size="small"
              textAlign="center"
              type="body"
            >
              {message}
            </Text>
          </Stack>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};

export { InputUI };
