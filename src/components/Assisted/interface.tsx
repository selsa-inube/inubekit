import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Grid } from "../Grid";
import { Stack } from "../Stack";
import { IText, Text } from "../Text";
import { Button, IButton } from "../Button";
import { Icon, IIcon } from "../Icon";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import { IAssisted } from ".";
import { IAssistedStep } from "./props";

import { ProgressBar } from "./ProgressBar";
import { StepIndicator } from "./StepIndicator";

import { StyledAssisted } from "./styles";
import { tokens } from "./tokens";

interface IAssistedUI {
  size: IAssisted["size"];
  step: IAssistedStep;
  totalSteps: number;
  disableNext: IAssisted["disableNext"];
  disableBack: IAssisted["disableBack"];
  disableSubmit: IAssisted["disableSubmit"];
  showCurrentStepNumber: boolean;
  onBackClick: IAssisted["onBackClick"];
  onNextClick: IAssisted["onNextClick"];
  onSubmitClick: IAssisted["onSubmitClick"];
  controls: IAssisted["controls"];
}

function AssistedUI(props: IAssistedUI) {
  const {
    size,
    step,
    totalSteps,
    disableNext,
    disableBack,
    disableSubmit,
    showCurrentStepNumber,
    onBackClick,
    onNextClick,
    onSubmitClick,
    controls,
  } = props;
  const theme = useContext(ThemeContext) as { assisted: typeof tokens };

  function isLastStep() {
    return step.number === totalSteps;
  }

  if (size === "large") {
    return (
      <StyledAssisted $size={size}>
        <Grid templateColumns="auto 1fr auto" alignItems="center" gap="16px">
          <Button
            variant="none"
            iconBefore={<MdArrowBack />}
            disabled={step.number === 1 || disableBack}
            cursorHover={true}
            onClick={() => onBackClick(step)}
            appearance={
              theme
                ? (theme.assisted.button.appearance as IButton["appearance"])
                : (tokens.button.appearance as IButton["appearance"])
            }
          >
            {controls!.goBackText}
          </Button>
          <Stack direction="column" gap="12px">
            <Stack gap="8px">
              {showCurrentStepNumber && (
                <StepIndicator
                  stepNumber={step.number}
                  isLastStep={isLastStep()}
                />
              )}
              <Text
                type="title"
                weight="bold"
                size="medium"
                ellipsis
                appearance={
                  theme
                    ? (theme.assisted.title.appearance as IText["appearance"])
                    : (tokens.title.appearance as IText["appearance"])
                }
              >
                {step.name}
              </Text>
            </Stack>
            <Stack alignItems="center" gap="8px">
              <ProgressBar currentStep={step.number} totalSteps={totalSteps} />
              {showCurrentStepNumber && (
                <Text type="label" size="small" weight="bold">
                  {step.number}/{totalSteps}
                </Text>
              )}
            </Stack>
            <Text
              type="label"
              appearance={
                theme
                  ? (theme.assisted.description
                      .appearance as IText["appearance"])
                  : (tokens.description.appearance as IText["appearance"])
              }
              size="medium"
              weight="bold"
            >
              {step.description}
            </Text>
          </Stack>
          <Button
            variant="none"
            iconAfter={<MdArrowForward />}
            disabled={isLastStep() ? disableSubmit : disableNext}
            cursorHover={true}
            appearance={
              theme
                ? (theme.assisted.button.appearance as IButton["appearance"])
                : (tokens.button.appearance as IButton["appearance"])
            }
            onClick={() => {
              isLastStep() ? onSubmitClick(step) : onNextClick(step);
            }}
          >
            {isLastStep() ? controls!.submitText : controls!.goNextText}
          </Button>
        </Grid>
      </StyledAssisted>
    );
  }

  return (
    <StyledAssisted $size={size}>
      <Stack direction="column" gap="8px">
        <Grid
          gap="8px"
          alignItems="center"
          templateColumns="auto auto 1fr auto"
        >
          <Icon
            icon={<MdArrowBack />}
            size="20px"
            onClick={() => onBackClick(step)}
            disabled={step.number === 1 || disableBack}
            cursorHover={true}
            appearance={
              theme
                ? (theme.assisted.button.appearance as IIcon["appearance"])
                : (tokens.button.appearance as IIcon["appearance"])
            }
          />
          {showCurrentStepNumber && (
            <StepIndicator stepNumber={step.number} isLastStep={isLastStep()} />
          )}
          <Text
            type="title"
            weight="bold"
            size="small"
            ellipsis
            appearance={
              theme
                ? (theme.assisted.title.appearance as IText["appearance"])
                : (tokens.title.appearance as IText["appearance"])
            }
          >
            {step.name}
          </Text>
          <Icon
            icon={<MdArrowForward />}
            size="20px"
            disabled={isLastStep() ? disableSubmit : disableNext}
            cursorHover={true}
            onClick={
              isLastStep() ? () => onSubmitClick(step) : () => onNextClick(step)
            }
            appearance={
              theme
                ? (theme.assisted.button.appearance as IIcon["appearance"])
                : (tokens.button.appearance as IIcon["appearance"])
            }
          />
        </Grid>
        <ProgressBar
          currentStep={step.number}
          totalSteps={totalSteps}
          isSmallSize
        />
        <Text
          type="label"
          appearance={
            theme
              ? (theme.assisted.description.appearance as IText["appearance"])
              : (tokens.description.appearance as IText["appearance"])
          }
          size="medium"
          weight="bold"
        >
          {step.description}
        </Text>
      </Stack>
    </StyledAssisted>
  );
}

export { AssistedUI };
