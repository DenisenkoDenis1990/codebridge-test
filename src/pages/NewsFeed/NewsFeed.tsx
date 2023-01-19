import { useLocation, useSearchParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { Article } from "../../components/Aricle/Article";
import { getFilteredNews } from "../../utils/getFilteredNews";
import { getCardDescription } from "../../utils/getCardDescription";
import { useGetArticlesByQuantityQuery } from "../../redux/articlesApi";

type ArticleObj = {
  id: number;
  title: string;
  imageUrl: string;
  summary: string;
  updatedAt: string;
};

export const NewsFeed = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter") ?? "";

  // Using a query hook automatically fetches data and returns query values, 30 is quantity just for example
  const { data, error, isFetching } = useGetArticlesByQuantityQuery("30");

  // handler for search input
  const changeFilter = (value: string) => {
    // setting search query into url parameters
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  let filteredArticles = [];

  // creating filtered array of articles by search query
  if (!isFetching && !error) {
    filteredArticles =
      searchQuery.length === 0
        ? data
        : data.filter((article: ArticleObj) => {
            return (
              getFilteredNews(article.title, searchQuery) ||
              getFilteredNews(article.summary, searchQuery)
            );
          });
  }

  return (
    <Container sx={{ p: "50px 75px", mr: "auto", ml: "auto", width: "1440px" }}>
      <FilterBar
        value={searchQuery}
        resultsCount={filteredArticles.length}
        onChange={changeFilter}
        searchQuery={searchQuery}
      ></FilterBar>
      {!error ? (
        <Grid container spacing="45px" sx={{ mt: "45px" }}>
          {filteredArticles.length !== 0 &&
            filteredArticles.map((article: ArticleObj) => {
              return (
                <Article
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  description={getCardDescription(article.summary)}
                  image={article.imageUrl}
                  state={{ from: location, article: article }}
                  updatedAt={article.updatedAt}
                  searchQuery={searchQuery.split(" ")}
                  isFetching={isFetching}
                ></Article>
              );
            })}
        </Grid>
      ) : (
        <h1>Oops something went wrong...</h1>
      )}
    </Container>
  );
};
