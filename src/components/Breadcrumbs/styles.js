import styled from "styled-components";
import { inube } from "../Foundations";

const StyledBreadcrumbs = styled.ul`
  padding: 0;
  margin: 0;
  & > li {
    display: inline-flex;
  }
  & > li:not(:last-child)::after,
  & > div:not(:last-child)::after {
    pointer-events: none;
    content: "/";
    margin: 0 8px;
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  }
  & li > p {
    display: inherit;
  }
`;

export { StyledBreadcrumbs };
