import { StyledBox } from "./styles";

interface IBox {
  appearance?: string;
  children?: React.ReactNode;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
}

function Box(props: IBox) {
  const {
    appearance = "light",
    children,
    padding = "16px",
    margin,
    borderRadius = "8px",
    width,
    height,
  } = props;
  return (
    <StyledBox
      $appearance={appearance}
      $padding={padding}
      $margin={margin}
      $borderRadius={borderRadius}
      $width={width}
      $height={height}
    >
      {children}
    </StyledBox>
  );
}

export { Box };
export type { IBox };
