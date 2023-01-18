import styled from "@emotion/styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
export const Banner = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 245px;
  width: 1440px;
  object-repeat: no-repeat;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

export const ArticleContainer = styled.div`
  width: 1290px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  margin-top: 150px;
  margin-right: auto;
  margin-left: auto;
  padding: 35px 75px 50px 75px;
`;

export const ArticleTitle = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #363636;
  margin-bottom: 50px;
`;

export const ArticleText = styled.p`
  font-style: normal;
  fon-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
`;

export const BackLinkIcon = styled(KeyboardBackspaceIcon)`
  width: 12px;
  height: 10px;
  margin-right: 6px;
  fill: #363636;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 45px;
  margin-left: 150px;
  text-decoration: none;
`;

export const BackLinkAlias = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #363636;
`;
