import { useEffect, useState } from "react";
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
    onChange,
    onFocus,
    onBlur,
  } = props;

  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const handleFilter = (newValue: string) => {
    if (newValue) {
      const normalizedValue = newValue.trim().toLowerCase();
      const filtered = options.filter(
        (option) =>
          option.label && option.label.toLowerCase().includes(normalizedValue),
      );
      setFilteredOptions(filtered);
      setShowOptions(filtered.length > 0);
    } else {
      setFilteredOptions(options);
      setShowOptions(false);
    }
  };

  const interceptChange = (name: string, value: string) => {
    setShowOptions(false);
    try {
      onChange && onChange(name, value);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
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
      onFocus={onFocus}
      onBlur={onBlur}
      showChevron={false}
      showOptions={showOptions}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
        handleFilter((e.target as HTMLInputElement).value)
      }
    />
  );
};

export { Autocomplete };
export type { IAutocomplete };
