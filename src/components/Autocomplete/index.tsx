import { useEffect, useMemo, useRef, useState } from "react";
import { IOption, ISelect, Select } from "../Select";

interface IAutocomplete extends Omit<ISelect, "onChange" | "value"> {
  value: string;
  options: IOption[];
  onChange: (name: string, value: string) => void;
}

const filterOptionsByText = (options: IOption[], text: string): IOption[] => {
  const normalized = text.trim().toLowerCase();
  if (!normalized) return options;
  return options.filter((option) =>
    option.label.toLowerCase().includes(normalized),
  );
};

const findExactMatch = (
  options: IOption[],
  text: string,
): IOption | undefined => {
  const normalized = text.trim().toLowerCase();
  return options.find(
    (option) =>
      option.label.toLowerCase() === normalized ||
      option.value.toLowerCase() === normalized,
  );
};

const Autocomplete = (props: IAutocomplete) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    value,
    options = [],
    required,
    size,
    fullwidth,
    invalid,
    message,
    onChange,
    onFocus,
    onBlur,
  } = props;

  const [filterText, setFilterText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const latestValueRef = useRef(value);
  const optionsRef = useRef(options);

  useEffect(() => {
    latestValueRef.current = value;
  }, [value]);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const filteredOptions = useMemo(
    () => filterOptionsByText(options, filterText),
    [options, filterText],
  );

  const handleFilter = (newValue: string) => {
    setFilterText(newValue);
    const filtered = filterOptionsByText(optionsRef.current, newValue);
    setShowOptions(newValue.trim().length > 0 && filtered.length > 0);
  };

  const interceptChange = (name: string, value: string) => {
    setFilterText("");
    onChange?.(name, value);
    setShowOptions(false);
  };

  const handleBlur = (event: FocusEvent) => {
    onBlur?.(event);

    setTimeout(() => {
      const currentValue = latestValueRef.current || "";
      const exactMatch = findExactMatch(optionsRef.current, currentValue);

      if (exactMatch && currentValue !== exactMatch.value) {
        onChange?.(name, exactMatch.value);
      } else if (!exactMatch && currentValue !== "") {
        onChange?.(name, "");
      }

      setFilterText("");
      setShowOptions(false);
    }, 200);
  };

  return (
    <Select
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={interceptChange}
      options={filteredOptions}
      required={required}
      size={size}
      fullwidth={fullwidth}
      invalid={invalid}
      message={message}
      onFocus={onFocus}
      onBlur={handleBlur}
      showChevron={false}
      editable={true}
      showOptions={showOptions}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
        handleFilter((e.target as HTMLInputElement).value)
      }
    />
  );
};

export { Autocomplete };
export type { IAutocomplete };
