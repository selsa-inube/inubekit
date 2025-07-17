import { countries, CountryCode } from "../../assets/countries/countries";

interface CountryFlagsProps {
  code: CountryCode;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
}

const CountryFlags = ({
  code,
  width = "24px",
  height = "24px",
  maxWidth,
  maxHeight,
  padding,
  margin,
}: CountryFlagsProps) => {
  const country = countries[code];

  return (
    <img
      src={country.flag}
      alt={country.name}
      style={{
        width,
        height,
        maxWidth,
        maxHeight,
        padding,
        margin,
        objectFit: "contain",
      }}
    />
  );
};

export { CountryFlags };
