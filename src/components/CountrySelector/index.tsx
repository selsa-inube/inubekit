import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { countries, CountryCode } from "../../assets/countries/countries";
import { Icon } from "../Icon";
import { IInputStatus } from "../Input/Input/props";
import { StyledOptionList } from "../Select/OptionList/styles";
import { StyledChevron } from "../Select/styles";
import { Text } from "../Text";
import { StyledContainer, StyledItem, StyledSelect } from "./styles";
import { CountryFlags } from "../CountryFlags";

interface CountrySelectorProps {
  onSelect: (code: CountryCode) => void;
  selected: CountryCode;
  maxItems?: number;
  disabled?: boolean;
  focused?: boolean;
  status?: IInputStatus;
  dialValue?: string;
}

function CountrySelector(props: CountrySelectorProps) {
  const {
    onSelect,
    selected,
    maxItems = 6,
    disabled,
    status,
    focused,
    dialValue,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countryArray = useMemo(() => {
    return Object.entries(countries)
      .filter(([, country]) => country.dial && country.flag)
      .map(([code, country]) => ({
        code: code as CountryCode,
        ...country,
      }));
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = useCallback(
    (code: CountryCode) => {
      onSelect(code);
      setIsOpen(false);
    },
    [onSelect],
  );

  const toggleDropdown = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  return (
    <StyledContainer ref={dropdownRef}>
      <StyledSelect
        onClick={toggleDropdown}
        $disabled={disabled}
        $status={status}
        $focused={focused}
      >
        <CountryFlags code={selected} />
        <Text size="medium" appearance="gray">
          ({dialValue || countries[selected].dial})
        </Text>
        <StyledChevron $displayList={isOpen} $disabled={disabled}>
          <Icon
            appearance="dark"
            icon={<MdOutlineChevronRight />}
            spacing="narrow"
          />
        </StyledChevron>
      </StyledSelect>

      {isOpen && !disabled && (
        <StyledOptionList
          $maxItems={maxItems}
          $totalOptions={countryArray.length}
        >
          {countryArray.map(({ code, name, dial }) => (
            <StyledItem
              key={code}
              onClick={() => handleClick(code)}
              role="option"
            >
              <CountryFlags code={code} />
              <Text size="medium" ellipsis>
                {name}
              </Text>
              <Text size="medium" appearance="gray" ellipsis>
                ({dial})
              </Text>
            </StyledItem>
          ))}
        </StyledOptionList>
      )}
    </StyledContainer>
  );
}

export { CountrySelector };
