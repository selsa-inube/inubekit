import { useState } from "react";
import { Stack } from "../../Stack";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";
import { CountryCode } from "../../../assets/countries/countries";
import CountrySelector from "../../CountrySelector";

const Phonefield = (props: IInput) => {
  const [countryCode, setCountryCode] = useState<CountryCode>("COL");
  const { ...rest } = props;

  console.log(...rest.id);

  return (
    <Stack alignItems="center">
      <CountrySelector selected={countryCode} onSelect={setCountryCode} />
      <InputUI {...rest} inputMode="tel" />
    </Stack>
  );
};

export { Phonefield };
