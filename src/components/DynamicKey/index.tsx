import { useState, useRef, useCallback, useId, KeyboardEvent } from "react";
import { IDynamicKey } from "./props";
import { StyledContainer, StyledInput } from "./styles";

const BACKSPACE_KEY = "Backspace";
const NUMERIC_PATTERN = /^\d$/;

const createEmptyArray = (length: number): string[] => Array(length).fill("");

const isComplete = (values: string[], requiredLength: number): boolean =>
  values.length === requiredLength && values.every((v) => v !== "");

const DynamicKey = (props: IDynamicKey) => {
  const {
    id,
    length = 6,
    masked = false,
    type = "numeric",
    size = "wide",
    onChange,
    onComplete,
  } = props;

  const generatedId = useId();
  const componentId = id || generatedId;
  const [values, setValues] = useState<string[]>(() =>
    createEmptyArray(length),
  );
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isNumericType = type === "numeric";
  const isAlphanumericType = type === "alphanumeric";

  const focusInput = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  const updateValues = useCallback(
    (newValues: string[]) => {
      setValues(newValues);
      const fullValue = newValues.join("");
      onChange?.(fullValue);

      if (isComplete(newValues, length)) {
        onComplete?.(fullValue);
      }
    },
    [length, onChange, onComplete],
  );

  const validateAndTransform = useCallback(
    (input: string): string | null => {
      if (!input) return "";
      const lastChar = input.slice(-1);
      if (isNumericType && !NUMERIC_PATTERN.test(lastChar)) return null;
      return isAlphanumericType ? lastChar.toUpperCase() : lastChar;
    },
    [isNumericType, isAlphanumericType],
  );

  const handleChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const transformed = validateAndTransform(raw);
      if (transformed === null) return;

      const newValues = [...values];
      newValues[index] = transformed;
      updateValues(newValues);

      if (transformed && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [values, length, focusInput, updateValues, validateAndTransform],
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== BACKSPACE_KEY) return;

      e.preventDefault();

      const hasValue = Boolean(values[index]);

      if (hasValue) {
        const newValues = [...values];
        newValues[index] = "";
        updateValues(newValues);
      } else if (index > 0) {
        const newValues = [...values];
        newValues[index - 1] = "";
        updateValues(newValues);
        focusInput(index - 1);
      }
    },
    [values, focusInput, updateValues],
  );

  return (
    <StyledContainer>
      {Array.from({ length }, (_, index) => {
        const display = masked && values[index] ? "*" : values[index];
        return (
          <StyledInput
            key={`${componentId}-${index}`}
            ref={(el: HTMLInputElement | null) => {
              inputRefs.current[index] = el;
            }}
            id={`${componentId}-input-${index}`}
            type="text"
            value={display}
            $focused={focusedIndex === index}
            $size={size}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(index, e)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(index, e)
            }
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            maxLength={1}
          />
        );
      })}
    </StyledContainer>
  );
};

export { DynamicKey };
export type { IDynamicKey };
