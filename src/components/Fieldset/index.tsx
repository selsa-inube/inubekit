import { StyledFieldset } from "./styles";
import { IFieldsetSpacing } from "./props";
import { Stack } from "../Stack";
import { Text } from "../Text";

interface IFieldset {
  legend: string;
  children: React.ReactNode;
  spacing?: IFieldsetSpacing;
  width?: string;
  height?: string;
}

function Fieldset(props: IFieldset) {
  const {
    legend,
    children,
    spacing = "compact",
    width = "auto",
    height = "auto",
  } = props;

  return (
    <StyledFieldset $spacing={spacing} $width={width} $height={height}>
      <legend>
        <Stack>
          <Text
            type={spacing === "compact" ? "label" : "title"}
            size={spacing === "compact" ? "medium" : "small"}
            appearance="gray"
            weight="bold"
          >
            {legend}
          </Text>
        </Stack>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
export type { IFieldset };
