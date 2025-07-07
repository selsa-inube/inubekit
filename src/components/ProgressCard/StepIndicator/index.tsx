import { Text } from "../../Text";
import { Icon } from "../../Icon";
import { MdCheckCircle } from "react-icons/md";
import { StyledStepIndicator } from "./styles";

interface IStepIndicator {
  stepNumber: number;
  isLastStep: boolean;
}

function StepIndicator(props: IStepIndicator) {
  const { stepNumber, isLastStep } = props;

  return (
    <StyledStepIndicator>
      {isLastStep ? (
        <Icon appearance="success" icon={<MdCheckCircle />} size="20px" />
      ) : (
        <Text type="label" size="medium" appearance="success" weight="bold">
          {stepNumber}
        </Text>
      )}
    </StyledStepIndicator>
  );
}

export { StepIndicator };
