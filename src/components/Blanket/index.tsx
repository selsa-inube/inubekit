import { useMediaQuery } from "../Hooks/useMediaQuery";
import { Stack } from "../Stack";
import { StyledBlanket } from "./styles";

interface IBlanket {
  children?: React.ReactNode;
}

const Blanket = (props: IBlanket) => {
  const { children } = props;
  const isSmallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledBlanket $isSmallScreen={!isSmallScreen}>
      <Stack alignItems="center" justifyContent="center">
        {children}
      </Stack>
    </StyledBlanket>
  );
};

export type { IBlanket };
export { Blanket };
