import { StyledProgressBar } from "./styles";

interface IProgressBar {
  percentage: number;
}

const ProgressBar = (props: IProgressBar) => {
  const { percentage } = props;
  return <StyledProgressBar $percentage={percentage} />;
};

export { ProgressBar };
export type { IProgressBar };
