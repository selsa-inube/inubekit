import { useContext, useEffect, useState } from "react";
import { MdOutlineWarning } from "react-icons/md";
import { ITextAppearance } from "src/components/Text/props";
import { ThemeContext } from "styled-components";
import { countries, CountryCode } from "../../../assets/countries/countries";
import { Icon } from "../../Icon";
import { Label } from "../../Label";
import { Stack } from "../../Stack";
import { Text } from "../../Text";
import { IInput } from "../Input";
import { ICounter } from "../Input/props";
import { getCounterAppearance, getCountryCodeByDial } from "../Input/utils";
import { tokens } from "../tokens";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInput,
  StyledInputContainer,
  StyledMessageContainer,
} from "./styles";
import { CountrySelector } from "../../CountrySelector";

const Counter = ({ maxLength, minLength, currentLength }: ICounter) => {
  const appearance = getCounterAppearance(currentLength, maxLength, minLength);
  return (
    <Text type="body" size="small" appearance={appearance} textAlign="start">
      {maxLength ? `${currentLength}/${maxLength}` : `${currentLength}`}
    </Text>
  );
};

interface IPhonefield extends IInput {
  onDialValueChange?: (dial: string) => void;
  initialCountryCode?: CountryCode;
  initialDialValue?: string;
}

function Phonefield(props: IPhonefield) {
  const {
    disabled = false,
    fullwidth = false,
    required = false,
    maxLength,
    minLength,
    label,
    size = "wide",
    id,
    value = "",
    status = "pending",
    iconAfter,
    iconBefore,
    readOnly,
    inputMode,
    placeholder,
    message,
    name,
    initialCountryCode,
    initialDialValue,
    onBlur,
    onChange,
    onFocus,
    onKeyUp,
    onDialValueChange,
  } = props;

  const getInitialCountryCode = (
    initialCountryCode?: CountryCode,
    initialDialValue?: string,
  ): CountryCode => {
    if (initialCountryCode) return initialCountryCode;
    if (initialDialValue)
      return getCountryCodeByDial(initialDialValue) || "COL";
    return "COL";
  };

  const [countryCode, setCountryCode] = useState<CountryCode>(
    getInitialCountryCode(initialCountryCode, initialDialValue),
  );
  const [dialValue, setDialValue] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const [flagsLoading, setFlagsLoading] = useState(true);

  useEffect(() => {
    if (countryCode && countries[countryCode]) {
      const dial = countries[countryCode].dial;
      setDialValue(dial);
      if (onDialValueChange) onDialValueChange(dial);
    } else {
      setDialValue("");
      if (onDialValueChange) onDialValueChange("");
    }
  }, [countryCode, onDialValueChange]);

  useEffect(() => {
    const urls = Object.values(countries)
      .map((country) => country.flag)
      .filter((url) => url !== "");

    if (urls.length === 0) {
      setFlagsLoading(false);
      return;
    }

    let loadedCount = 0;

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === urls.length) {
          setFlagsLoading(false);
        }
      };
    });
  }, []);

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

  const inputValue = (value ?? "").toString();
  const currentLength = inputValue.length;

  const theme = useContext(ThemeContext) as { input: typeof tokens };
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    tokens.required.appearance;
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    tokens.message.appearance;

  const showLabel =
    label ||
    (required && !disabled) ||
    (!disabled && (maxLength !== undefined || minLength !== undefined));
  const showRequired = required && !disabled;
  const showCounter =
    !disabled && (maxLength !== undefined || minLength !== undefined);

  return (
    <StyledContainer $disabled={disabled} $fullwidth={fullwidth}>
      {showLabel && (
        <StyledContainerLabel
          $alignItems="center"
          $disabled={disabled}
          $fullwidth={fullwidth}
          $showRequired={showRequired}
          $showCounter={showCounter}
          $wrap="wrap"
        >
          {label && (
            <Label
              focused={focused}
              htmlFor={id}
              invalid={status === "invalid"}
              margin="0px 0px 0px 16px"
              size={size === "compact" ? "medium" : "large"}
              disabled={disabled}
              ellipsis
            >
              {label}
            </Label>
          )}
          {showRequired && (
            <Text appearance={requiredAppearance} size="small" type="body">
              (Requerido)
            </Text>
          )}

          {showCounter && (
            <Stack justifyContent="flex-end" alignItems="center" width="100%">
              <Counter
                maxLength={maxLength}
                minLength={minLength}
                currentLength={currentLength}
              />
            </Stack>
          )}
        </StyledContainerLabel>
      )}

      <StyledInputContainer
        $disabled={disabled}
        $focused={focused}
        $iconAfter={iconAfter}
        $iconBefore={iconBefore}
        $status={status}
        readOnly={readOnly}
        $size={size}
      >
        <CountrySelector
          selected={countryCode}
          onSelect={setCountryCode}
          disabled={disabled || flagsLoading}
          dialValue={dialValue}
        />
        {iconBefore && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={iconBefore}
            size={size === "compact" ? "18px" : "24px"}
          />
        )}

        <StyledInput
          $focused={focused}
          $fullwidth={fullwidth}
          $iconAfter={iconAfter}
          $iconBefore={iconBefore}
          $disabled={disabled}
          $required={required}
          $size={size}
          $status={status}
          id={id}
          inputMode={inputMode}
          label={label}
          name={name}
          onBlur={interceptBlur}
          onChange={interceptChange}
          onFocus={interceptFocus}
          onKeyUp={interceptKeyUp}
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          maxLength={maxLength}
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
}

export { Phonefield };
export type { IPhonefield };
