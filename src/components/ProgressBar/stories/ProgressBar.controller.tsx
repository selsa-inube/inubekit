import { useState, useEffect } from "react";
import { IProgressBar, ProgressBar } from "../index";
import { StyledText } from "./styles";

interface IProgressBarController extends IProgressBar {
  run?: boolean;
}

const ProgressBarController = (props: IProgressBarController) => {
  const { onComplete, run = true } = props;
  const [progress, setProgress] = useState(0);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    if (!run) {
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          const fakeAnimationEvent = {
            animationName: "progressComplete",
            elapsedTime: 0,
            pseudoElement: "",
          } as unknown as React.AnimationEvent<HTMLDivElement>;

          onComplete?.(fakeAnimationEvent);
          return 0;
        }

        if (prevProgress == 50) {
          setIsStuck(true);
          return prevProgress;
        }
        setIsStuck(false);
        return prevProgress + 0.5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [run, onComplete]);

  return (
    <div>
      <ProgressBar
        {...props}
        progress={progress}
        animated={isStuck}
        onComplete={onComplete}
      />
      <StyledText>Current Progress: {progress.toFixed(1)}%</StyledText>
      {isStuck && (
        <StyledText>
          The progress bar is currently stuck, but the process is still ongoing.
        </StyledText>
      )}
    </div>
  );
};

export { ProgressBarController };
