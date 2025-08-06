import { countries, CountryCode } from "../../assets/countries/countries";
import { StyledImg } from "./styles";

interface CountryFlagsProps {
  code: CountryCode;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
}

const CountryFlags = (props: CountryFlagsProps) => {
  const {
    code,
    width = "24px",
    height = "24px",
    maxWidth = "auto",
    maxHeight = "auto",
    padding = "0",
    margin = "0",
  } = props;

  const country = countries[code] ?? null;

  if (!country) {
    return (
      <StyledImg
        alt="Imagen no encontrada"
        $width={width}
        $height={height}
        $maxWidth={maxWidth}
        $maxHeight={maxHeight}
        $padding={padding}
        $margin={margin}
      />
    );
  }

  return (
    <StyledImg
      src={country.flag}
      alt={country.name}
      $width={width}
      $height={height}
      $maxWidth={maxWidth}
      $maxHeight={maxHeight}
      $padding={padding}
      $margin={margin}
    />
  );
};

export { CountryFlags };
