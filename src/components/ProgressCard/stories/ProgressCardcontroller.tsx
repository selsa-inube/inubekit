import { useState, useEffect } from "react";
import { ProgressCard } from "../index";
import { IProgressCardStep } from "../props";

interface IProgressCardController {
  steps: Record<string, IProgressCardStep>;
  totalSteps?: number;
  onComplete?: () => void;
  durationMs?: number;
}

const ProgressCardController = ({
  steps,
  totalSteps,
  onComplete,
  durationMs = 25000,
}: IProgressCardController) => {
  const stepsList = Object.values(steps);
  const total = totalSteps ?? stepsList.length;
  const [percentage, setPercentage] = useState(0);
  const [currentStepNumber, setCurrentStepNumber] = useState(1);

  useEffect(() => {
    const intervalTime = 100;
    const increment = (100 / durationMs) * intervalTime;

    const interval = setInterval(() => {
      setPercentage((prev) => {
        const next = prev + increment;

        const stepFromPercentage = Math.min(
          total,
          Math.floor((next / 100) * total) + 1,
        );

        if (stepFromPercentage !== currentStepNumber) {
          setCurrentStepNumber(stepFromPercentage);
        }

        if (next >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete();
          return 100;
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [durationMs, onComplete, total, currentStepNumber]);

  const step = stepsList.find((s) => s.number === currentStepNumber);

  return (
    <div>
      <ProgressCard
        step={step!}
        totalSteps={total}
        progress={Math.round(percentage)}
        onComplete={onComplete}
      />
    </div>
  );
};

export { ProgressCardController };
export type { IProgressCardController };
