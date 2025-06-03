import { StyledProgressBar } from "./styles";

interface IProgressBar {
  currentStep: number;
  totalSteps: number;
  isSmallSize?: boolean;
}

const ProgressBar = (props: IProgressBar) => {
  const { currentStep, totalSteps, isSmallSize = false } = props;
  return (
    <StyledProgressBar
      $currentStep={currentStep}
      $totalSteps={totalSteps}
      $isSmallSize={isSmallSize}
    />
  );
};

export { ProgressBar };
export type { IProgressBar };
