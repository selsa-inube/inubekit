import { useState, useMemo, useId } from "react";
import { IDynamicInput } from "./props";
import { StyledInput } from "./styles";

const NUMERIC_PATTERN = /^\d$/;
const MAX_INPUT_LENGTH = 1;

const DynamicInput = (props: IDynamicInput) => {
  const {
    placeholder = "",
    masked = false,
    type = "numeric",
    size = "wide",
    onChange,
    onKeyDown,
  } = props;

  const id = useId();

  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  const isNumericType = type === "numeric";
  const isAlphanumericType = type === "alphanumeric";

  const displayValue = useMemo(
    () => (masked && value ? "*" : value),
    [masked, value],
  );

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const validateAndTransformInput = (input: string): string | null => {
    if (!input) return input;

    const lastChar = input.slice(-1);

    if (isNumericType && !NUMERIC_PATTERN.test(lastChar)) {
      return null;
    }

    return isAlphanumericType ? lastChar.toUpperCase() : lastChar;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const transformedValue = validateAndTransformInput(inputValue);

    if (transformedValue === null) return;

    setValue(transformedValue || "");

    onChange?.({
      ...e,
      target: {
        ...e.target,
        value: transformedValue || "",
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <StyledInput
      id={id}
      type="text"
      value={displayValue}
      placeholder={placeholder}
      $focused={focused}
      $size={size}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={onKeyDown}
      maxLength={MAX_INPUT_LENGTH}
    />
  );
};

export { DynamicInput };
export type { IDynamicInput };
