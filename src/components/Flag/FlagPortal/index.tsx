import ReactDOM from "react-dom";
import { Stack } from "../../Stack";
import { Flag } from "../Flag";
import { useFlag } from "../useFlag";
import { StyledContainer } from "./styles";

const FlagPortal = () => {
  const { flags } = useFlag();

  return ReactDOM.createPortal(
    <StyledContainer>
      <Stack direction="column" gap="12px">
        {flags.map((flag) => (
          <Flag
            key={flag.id}
            id={flag.id}
            title={flag.title}
            description={flag.description}
            appearance={flag.appearance}
            duration={flag.duration}
          />
        ))}
      </Stack>
    </StyledContainer>,

    document.body,
  );
};

export { FlagPortal };
