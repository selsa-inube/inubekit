import { Text } from "../../Text";
import { Icon, IIcon } from "../../Icon";
import { MdCheckCircle } from "react-icons/md";

import { StyledStepIndicator } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { tokens } from "../tokens";

interface IStepIndicator {
  stepNumber: number;
  isLastStep: boolean;
}

function StepIndicator(props: IStepIndicator) {
  const { stepNumber, isLastStep } = props;
  const theme = useContext(ThemeContext) as { assisted: typeof tokens };

  return (
    <StyledStepIndicator>
      {isLastStep ? (
        <Icon
          appearance={
            theme
              ? (theme.assisted.button.appearance as IIcon["appearance"])
              : (tokens.button.appearance as IIcon["appearance"])
          }
          icon={<MdCheckCircle />}
          size="20px"
        />
      ) : (
        <Text type="label" size="medium" appearance="primary" weight="bold">
          {stepNumber}
        </Text>
      )}
    </StyledStepIndicator>
  );
}

export { StepIndicator };
