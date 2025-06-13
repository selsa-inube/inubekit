import { Box } from "../Box";
import { Stack } from "../Stack";
import { IProgressCardStep } from "./props";
import { IText, Text } from "../Text";
import { ThemeContext } from "styled-components";
import { useContext, useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import { tokens } from "./tokens";
import { StepIndicator } from "./StepIndicator";

interface IProgressCard {
  step: IProgressCardStep;
  totalSteps: number;
  showStepIndicator?: boolean;
  showCurrentStepNumber?: boolean;
  percentage?: number;
  onComplete?: () => void;
}

function ProgressCard(props: IProgressCard) {
  const {
    step,
    totalSteps,
    showStepIndicator = true,
    showCurrentStepNumber = true,
    percentage,
    onComplete,
  } = props;
  const theme = useContext(ThemeContext) as { progressCard: typeof tokens };

  const isLastStep = step.number === totalSteps;

  const computedPercentage =
    percentage ?? Math.round((step.number / totalSteps) * 100);

  useEffect(() => {
    if (isLastStep && onComplete) onComplete();
  }, [isLastStep, onComplete]);

  return (
    <Box padding="12px">
      <Stack direction="column" gap="8px">
        <Stack gap="8px" alignItems="center">
          {showStepIndicator && (
            <StepIndicator stepNumber={step.number} isLastStep={isLastStep} />
          )}
          <Text
            type="title"
            weight="bold"
            size="small"
            ellipsis
            appearance={
              theme
                ? (theme.progressCard.title.appearance as IText["appearance"])
                : (tokens.title.appearance as IText["appearance"])
            }
          >
            {step.name}
          </Text>
        </Stack>
        <Stack direction="column" gap="2px">
          <Stack alignItems="center" gap="8px">
            <ProgressBar percentage={computedPercentage} />
            {showCurrentStepNumber && (
              <Text
                type="label"
                size="small"
                weight="bold"
                appearance={
                  theme
                    ? (theme.progressCard.countStep
                        .appearance as IText["appearance"])
                    : (tokens.countStep.appearance as IText["appearance"])
                }
              >
                {step.number}/{totalSteps}
              </Text>
            )}
          </Stack>
          <Text
            type="label"
            size="small"
            textAlign="center"
            appearance={
              theme
                ? (theme.progressCard.percentStep
                    .appearance as IText["appearance"])
                : (tokens.percentStep.appearance as IText["appearance"])
            }
          >
            {computedPercentage}%
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export { ProgressCard };
export type { IProgressCard };
