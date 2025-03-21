import { IStackStructure } from "../props";
import { StyledSquare } from "./stories.styles";
import React from "react";

interface ISquaresProps {
  item: React.ReactNode;
  as: IStackStructure;
}

const Squares = (props: ISquaresProps) => {
  const { item, as } = props;

  return <StyledSquare as={as}>{item}</StyledSquare>;
};

export { Squares };
