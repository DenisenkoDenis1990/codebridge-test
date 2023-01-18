import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const SearchInput = styled(Input)`
  margin: 0;
  margin-bottom: 40px;
  width: 600px;
  padding: 0;
  font: 16px;
  line-hight: 1.5;
  background: #ffffff;
  //border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: 0px;
  &:hover::before {
    outline: 0;
    border-bottom: 0;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 20px;
  height: 20px;
`;

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #363636;
  margin-bottom: 10px;
`;

export const ResultLabel = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  color: #363636;
  margin-bottom: 5px;
`;
