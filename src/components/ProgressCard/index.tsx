import { Box } from "../Box";
import { Stack } from "../Stack";
import { IProgressCardStep } from "./props";
import { IText, Text } from "../Text";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { tokens } from "./tokens";
import { StepIndicator } from "./StepIndicator";
import { ProgressBar } from "../ProgressBar";
import { IProgressBarAppearance } from "../ProgressBar/props";

interface IProgressCard {
  step: IProgressCardStep;
  totalSteps?: number;
  displayStep?: boolean;
  countSteps?: boolean;
  animated?: boolean;
  progress?: number;
  appearance?: IProgressBarAppearance;
}

function ProgressCard(props: IProgressCard) {
  const {
    step,
    totalSteps,
    displayStep = true,
    countSteps = true,
    animated = true,
    progress,
    appearance,
  } = props;
  const theme = useContext(ThemeContext) as { progressCard: typeof tokens };

  const isLastStep = totalSteps ? step.number === totalSteps : false;

  const computedProgress =
    progress ?? (totalSteps ? Math.round((step.number / totalSteps) * 100) : 0);

  return (
    <Box padding="12px">
      <Stack direction="column" gap="8px">
        <Stack gap="8px" alignItems="center">
          {displayStep && (
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
          <Stack alignItems="center" gap="8px" justifyContent="space-between">
            <ProgressBar
              progress={computedProgress}
              animated={animated}
              appearance={
                appearance ||
                (theme
                  ? theme.progressCard.progressBar.appearance
                  : tokens.progressBar.appearance)
              }
            />
            {countSteps && totalSteps && (
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
            {computedProgress}%
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export { ProgressCard };
export type { IProgressCard };
