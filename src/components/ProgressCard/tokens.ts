import { inube } from "../Foundations";
import { IProgressBarAppearance } from "../ProgressBar/props";

const tokens: {
  step: { color: string };
  border: { color: string };
  title: { appearance: IProgressBarAppearance };
  countStep: { appearance: IProgressBarAppearance };
  percentStep: { appearance: IProgressBarAppearance };
  progressBar: { appearance: IProgressBarAppearance };
} = {
  step: {
    color: inube.palette.green.G400,
  },
  border: {
    color: inube.palette.neutral.N40,
  },
  title: {
    appearance: "dark",
  },
  countStep: {
    appearance: "dark",
  },
  percentStep: {
    appearance: "gray",
  },
  progressBar: {
    appearance: "success",
  },
};

export { tokens };
