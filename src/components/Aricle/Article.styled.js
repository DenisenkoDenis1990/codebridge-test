import Highlighter from "react-highlight-words";
import styled from "@emotion/styled";

export const Title = styled(Highlighter)`
  display: block;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #363636;
`;

export const Description = styled(Highlighter)`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #363636;
`;
