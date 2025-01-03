import { StyledDivider } from "./styles";

interface IDivider {
  dashed?: boolean;
}

const Divider = (props: IDivider) => {
  const { dashed = false } = props;

  return <StyledDivider $dashed={dashed} />;
};

export { Divider };
export type { IDivider };
