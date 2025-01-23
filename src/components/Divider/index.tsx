import { StyledDivider } from "./styles";

interface IDivider {
  dashed?: boolean;
  marginTop?: string;
  marginBottom?: string;
}

const Divider = (props: IDivider) => {
  const { dashed = false, marginTop = "0", marginBottom = "0" } = props;

  return (
    <StyledDivider
      $dashed={dashed}
      $marginTop={marginTop}
      $marginBottom={marginBottom}
    />
  );
};

export { Divider };
export type { IDivider };
