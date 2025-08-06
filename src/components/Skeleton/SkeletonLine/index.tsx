import { StyledSkeletonLine } from "./styles";

interface ISkeletonLine {
  width?: string;
  height?: string;
  animated?: boolean;
}

const SkeletonLine = (props: ISkeletonLine) => {
  const { width = "100%", height = "16px", animated = false } = props;

  return (
    <StyledSkeletonLine $width={width} $height={height} $animated={animated} />
  );
};

export { SkeletonLine };
export type { ISkeletonLine };
