import { useRef, useCallback, useId, KeyboardEvent, ChangeEvent } from "react";
import { IDynamicKey } from "./props";
import { StyledContainer } from "./styles";
import { DynamicInput } from "./DynamicInput";

const BACKSPACE_KEY = "Backspace";

const createEmptyArray = (length: number, value: string): string[] =>
  Array(length)
    .fill("")
    .map((_, i) => value[i] || "");

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
  const valuesRef = useRef<string[]>(createEmptyArray(length, ""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const previousValueRef = useRef<string>("");

  const notifyChanges = useCallback(() => {
    const fullValue = valuesRef.current.join("");

    if (previousValueRef.current !== fullValue) {
      previousValueRef.current = fullValue;
      onChange?.(fullValue);

      if (isComplete(valuesRef.current, length)) {
        onComplete?.(fullValue);
      }
    }
  }, [length, onChange, onComplete]);

  const focusInput = useCallback((index: number) => {
    inputRefs.current[index]?.focus();
  }, []);

  const handleChange = useCallback(
    (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      valuesRef.current[index] = inputValue;

      notifyChanges();

      if (inputValue && index < length - 1) {
        focusInput(index + 1);
      }
    },
    [length, focusInput, notifyChanges],
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== BACKSPACE_KEY) return;

      e.preventDefault();
      const hasValue = Boolean(valuesRef.current[index]);

      if (hasValue) {
        valuesRef.current[index] = "";
        inputRefs.current[index]?.dispatchEvent(
          new Event("input", { bubbles: true }),
        );
      } else if (index > 0) {
        valuesRef.current[index - 1] = "";
        focusInput(index - 1);
        inputRefs.current[index - 1]?.dispatchEvent(
          new Event("input", { bubbles: true }),
        );
      }

      notifyChanges();
    },
    [focusInput, notifyChanges],
  );

  const setInputRef = useCallback(
    (el: HTMLDivElement | null, index: number) => {
      if (el) {
        const input = el.querySelector<HTMLInputElement>("input");
        inputRefs.current[index] = input;
      }
    },
    [],
  );

  return (
    <StyledContainer>
      {Array.from({ length }, (_, index) => (
        <div
          key={`${componentId}-${index}`}
          ref={(el) => setInputRef(el, index)}
        >
          <DynamicInput
            masked={masked}
            type={type}
            size={size}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        </div>
      ))}
    </StyledContainer>
  );
};

export { DynamicKey };
export type { IDynamicKey };
