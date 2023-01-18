import { useState, useEffect } from "react";
import { getNews } from "../utils/newsApi";
import { useLocation, useSearchParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { Article } from "../components/Aricle/Article";
import { getFilteredNews } from "../utils/getFilteredNews";
import { getCardDescription } from "../utils/getCardDescription";

export const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter") ?? "";
  useEffect(() => {
    getNews()
      .then(setArticles)
      .catch((error) => console.log(error));
  }, []);

  const changeFilter = (value: string) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  const filteredArticles =
    searchQuery.length === 0
      ? articles
      : articles.filter((article) => {
          return (
            getFilteredNews(article.title, searchQuery) ||
            getFilteredNews(article.summary, searchQuery)
          );
        });

  return (
    <Container sx={{ p: "50px 75px", mr: "auto", ml: "auto", width: "1440px" }}>
      <FilterBar
        value={searchQuery}
        resultsCount={filteredArticles.length}
        onChange={changeFilter}
      ></FilterBar>
      <Grid container spacing="45px" sx={{ mt: "45px" }}>
        {filteredArticles.length !== 0 &&
          filteredArticles.map((article) => {
            return (
              <Article
                id={article.id}
                title={article.title}
                description={getCardDescription(article.summary)}
                image={article.imageUrl}
                state={{ from: location, article: article }}
                updatedAt={article.updatedAt}
                searchQuery={searchQuery.split(" ")}
              ></Article>
            );
          })}
      </Grid>
    </Container>
  );
};
