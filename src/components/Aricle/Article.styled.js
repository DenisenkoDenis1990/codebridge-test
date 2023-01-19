import Highlighter from "react-highlight-words";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CalendarTodayOutlined from "@mui/icons-material/CalendarTodayOutlined";
import { Link } from "react-router-dom";
export const Title = styled(Highlighter)`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const Description = styled(Highlighter)`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const PublicationDate = styled(Typography)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.6;
  margin-bottom: 24px;
`;

export const CalendarIcon = styled(CalendarTodayOutlined)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  opacity: 0.6;
`;

export const ReadMoreLink = styled(Link)`
  position: absolute;
  left: 25px;
  bottom: 25px;
  align-items: center;
  display: flex;
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #363636;
`;
