import { CountryCode, countries } from "../../../assets/countries/countries";

type CounterAppearance = "gray" | "danger" | "warning";

const getCounterAppearance = (
  valueLength: number,
  maxLength?: number,
  minLength?: number,
): CounterAppearance => {
  if (valueLength === 0) return "gray";
  if (minLength !== undefined && valueLength < minLength) return "danger";
  if (maxLength !== undefined && valueLength > maxLength) return "danger";
  if (minLength !== undefined && valueLength === minLength) return "warning";
  if (maxLength !== undefined) {
    const threshold = Math.floor(maxLength * 0.1);
    if (maxLength - valueLength <= threshold) return "warning";
  }
  return "gray";
};

const getCountryCodeByDial = (dial: string): CountryCode | undefined => {
  const entry = Object.entries(countries).find(
    ([, country]) => country.dial === dial,
  );
  return entry ? (entry[0] as CountryCode) : undefined;
};

export { getCounterAppearance, getCountryCodeByDial };
