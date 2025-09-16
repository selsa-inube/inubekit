import { useEffect, useRef, useState } from "react";
import { IOption, ISelect, Select } from "../Select";

interface IAutocomplete extends Omit<ISelect, "onChange" | "value"> {
  value: string;
  options: IOption[];
  onChange: (name: string, value: string) => void;
}

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

  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const latestValueRef = useRef<string>(value);
  useEffect(() => {
    latestValueRef.current = value;
  }, [value]);

  useEffect(() => {
    const selectedOption = options.find((option) => option.value === value);
    if (selectedOption) {
      setFilteredOptions(options);
    }
  }, [value, options]);

  const handleFilter = (newValue: string) => {
    try {
      const normalizedValue = newValue.trim().toLowerCase();
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(normalizedValue),
      );
      setFilteredOptions(filtered.length > 0 ? filtered : options);
      setShowOptions(filtered.length > 0);
    } catch (error) {
      console.error(`Error when filtering options. ${error}`);
      setFilteredOptions(options);
      setShowOptions(false);
    }
  };

  const interceptChange = (name: string, value: string) => {
    setShowOptions(false);
    try {
      onChange && onChange(name, value);
      if (value === "") {
        setShowOptions(false);
        setFilteredOptions(options);
      }
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  const handleBlur = (event: FocusEvent) => {
    try {
      const normalizedValue = (value || "").trim().toLowerCase();

      const exactMatch = options.find(
        (option) => option.value.toLowerCase() === normalizedValue,
      );

      if (exactMatch) {
        onChange && onChange(name, exactMatch.value);
      }

      onBlur && onBlur(event);

      setTimeout(() => {
        const currentNormalized = (latestValueRef.current || "")
          .trim()
          .toLowerCase();

        const currentExact = options.find(
          (option) => option.value.toLowerCase() === currentNormalized,
        );

        if (currentExact) {
          setFilteredOptions(options);
          setShowOptions(false);
          return;
        }

        onChange && onChange(name, "");
        setFilteredOptions(options);
        setShowOptions(false);
      }, 150);
    } catch (error) {
      console.error(`Error when handling blur event. ${error}`);
      setShowOptions(false);
      setFilteredOptions(options);
    }
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
