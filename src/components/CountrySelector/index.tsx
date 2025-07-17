import { useState, useRef, useEffect } from "react";
import { countries, CountryCode } from "../../assets/countries/countries";
import { CountryFlags } from "../CountryFlags";
import {
  StyledChevron,
  StyledFullContainer,
  StyledItem,
  StyledOptionList,
} from "./styles";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { MdOutlineChevronRight } from "react-icons/md";

interface CountrySelectorProps {
  onSelect: (code: CountryCode) => void;
  selected: CountryCode;
  maxItems?: number;
}

const CountrySelector = (props: CountrySelectorProps) => {
  const { onSelect, selected, maxItems = 6 } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countryArray = Object.entries(countries)
    .filter(([, country]) => !!country.dial)
    .map(([code, country]) => ({
      code: code as CountryCode,
      ...country,
    }));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <StyledFullContainer onClick={() => setIsOpen(!isOpen)}>
        <CountryFlags code={selected} width="28px" height="28px" />
        <Text size="medium" appearance="gray">
          ({countries[selected].dial})
        </Text>
        <StyledChevron $displayList={isOpen}>
          <Icon
            appearance="dark"
            icon={<MdOutlineChevronRight />}
            spacing="narrow"
          />
        </StyledChevron>
      </StyledFullContainer>

      {isOpen && (
        <StyledOptionList
          $maxItems={maxItems}
          $totalOptions={countryArray.length}
        >
          {countryArray.map(({ code, name, dial }) => (
            <StyledItem
              key={code}
              onClick={() => {
                onSelect(code as CountryCode);
                setIsOpen(false);
              }}
              tabIndex={0}
              role="option"
            >
              <CountryFlags code={code} width="24px" height="24px" />
              <Text size="medium" ellipsis>
                {name}
              </Text>
              <Text size="medium" appearance="gray">
                ({dial})
              </Text>
            </StyledItem>
          ))}
        </StyledOptionList>
      )}
    </div>
  );
};

export default CountrySelector;
