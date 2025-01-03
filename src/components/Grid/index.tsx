import {
  IGridAlignContent,
  IGridAlignItems,
  IGridAutoFlow,
  IGridJustifyContent,
  IGridJustifyItems,
} from "./props";

import { StyledGrid } from "./styles";

interface IGrid {
  templateColumns?: string;
  templateRows?: string;
  gap?: string;
  justifyItems?: IGridJustifyItems;
  alignItems?: IGridAlignItems;
  justifyContent?: IGridJustifyContent;
  alignContent?: IGridAlignContent;
  autoColumns?: string;
  autoRows?: string;
  autoFlow?: IGridAutoFlow;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  children: React.ReactNode;
}

const Grid = (props: IGrid) => {
  const {
    templateColumns = "auto",
    templateRows = "auto",
    gap = "0px",
    justifyItems = "stretch",
    alignItems = "stretch",
    justifyContent = "start",
    alignContent = "start",
    autoColumns = "0px",
    autoRows = "0px",
    autoFlow = "row",
    margin = "0px",
    padding = "0px",
    height = "auto",
    width = "auto",
    children,
  } = props;

  return (
    <StyledGrid
      $templateColumns={templateColumns}
      $templateRows={templateRows}
      $gap={gap}
      $justifyItems={justifyItems}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $alignContent={alignContent}
      $autoColumns={autoColumns}
      $autoRows={autoRows}
      $autoFlow={autoFlow}
      $margin={margin}
      $padding={padding}
      $height={height}
      $width={width}
    >
      {children}
    </StyledGrid>
  );
};

export { Grid };
export type { IGrid };
