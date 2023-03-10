import { useRef } from "react";
import { useLocation } from "react-router-dom";

import {
  Banner,
  ArticleTitle,
  ArticleText,
  ArticleContainer,
  BackLinkIcon,
  BackLink,
  BackLinkAlias,
} from "./ArticleDescription.styled";

export const ArticleDescription = () => {
  const location = useLocation();
  const article = location.state.article;

  // path for backLink button
  const backUrlPath = useRef(location.state?.from ?? "/");

  return (
    <div>
      <Banner src={article.imageUrl} alt={article.id}></Banner>
      <ArticleContainer>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleText>{article.summary}</ArticleText>
      </ArticleContainer>

      <BackLink to={backUrlPath.current}>
        <BackLinkIcon />
        <BackLinkAlias> Back to homepage </BackLinkAlias>
      </BackLink>
    </div>
  );
};
