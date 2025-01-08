import { ISpinnerSize, ISpinnerAppearance } from "./props";
import { StyledSpinner } from "./styles";

interface ISpinner {
  size?: ISpinnerSize;
  appearance?: ISpinnerAppearance;
  transparent?: boolean;
}

const Spinner = (props: ISpinner) => {
  const {
    size = "medium",
    appearance = "primary",
    transparent = false,
  } = props;

  return (
    <StyledSpinner
      $appearance={appearance}
      $size={size}
      $transparent={transparent}
    />
  );
};

export { Spinner };
export type { ISpinner };
