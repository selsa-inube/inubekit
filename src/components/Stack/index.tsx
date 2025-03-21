import { StyledFlex } from "./styles";
import {
  IStackWrapControl,
  IStackDirectionAlignment,
  IStackJustifyContent,
  IStackAlignItem,
  IStackAlignContent,
  IStackStructure,
} from "./props";

interface IStack {
  children?: React.ReactNode;
  as?: IStackStructure;
  wrap?: IStackWrapControl;
  direction?: IStackDirectionAlignment;
  justifyContent?: IStackJustifyContent;
  alignItems?: IStackAlignItem;
  alignContent?: IStackAlignContent;
  height?: string;
  width?: string;
  gap?: string;
  margin?: string;
  padding?: string;
}

const Stack = (props: IStack) => {
  const {
    children,
    as = "div",
    wrap,
    direction,
    justifyContent,
    alignItems,
    alignContent,
    height,
    width,
    gap,
    margin = "0px",
    padding = "0px",
  } = props;

  return (
    <StyledFlex
      as={as}
      $direction={direction}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $alignContent={alignContent}
      $height={height}
      $width={width}
      $wrap={wrap}
      $gap={gap}
      $margin={margin}
      $padding={padding}
    >
      {children}
    </StyledFlex>
  );
};

export { Stack };

export type { IStack };
