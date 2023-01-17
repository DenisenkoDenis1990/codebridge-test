import { useState, useEffect } from "react";
import { getNews } from "../utils/newsApi";
import { Link } from "react-router-dom";
import { useLocation, useSearchParams } from "react-router-dom";
//import debounce from "lodash.debounce";
import Highlighter from "react-highlight-words";
import { Box, Container, Grid } from "@mui/material";
import { FilterBar } from "../components/FilterBar/FilterBar";
import { NewsGrid } from "../components/NewsGrid/NewsGrid";
import { Article } from "../components/Aricle/Article";
import { ConstructionOutlined } from "@mui/icons-material";
import { getNormalizedDate } from "../utils/dateTransforming";

export const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  //const [filter, setFilter] = useState<String>("");
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter") ?? "";
  useEffect(() => {
    getNews()
      .then(setArticles)
      .catch((error) => console.log(error));
  }, []);

  //   const inputHandler = (event: { target: { value: any } }) => {
  //     const { value } = event.target;
  //     const filtArr = value.split(" ");
  //     console.log(filtArr);
  //     setSearchParams(value !== "" ? { filter: value } : {});
  //     //setFilter(value);
  //   };

  const changeFilter = (value: string) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

  //   const debouncedChangeHandler = useMemo(() => debounce(changeFilter, 500), []);

  const filteredArticles = articles.filter((article) => {
    return (
      article.title
        .toLowerCase()
        .split(" ")
        .some((element: string) =>
          searchQuery.toLowerCase().split(" ").includes(element)
        ) ||
      article.summary
        .toLowerCase()
        .split(" ")
        .some((element: string) =>
          searchQuery.toLowerCase().split(" ").includes(element)
        )
    );
    // return (
    //   article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //   article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    // );
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
                description={article.summary.slice(0, 97) + "..."}
                image={article.imageUrl}
                state={{ from: location, article: article }}
                updatedAt={article.updatedAt}
                searchQuery={searchQuery.split(" ")}
              ></Article>
            );
          })}
      </Grid>

      {/* <ul>
        {filteredArticles.map((article) => {
          return (
            <li key={article.id}>
              <img
                src={article.imageUrl}
                alt={article.id}
                style={{ width: 200 }}
                loading="lazy"
              />

              <p>{getNormalizedDate(article.updatedAt)}</p>

              <Highlighter
                searchWords={searchQuery.split(" ")}
                textToHighlight={article.title}
                autoEscape={true}
              ></Highlighter>

              <Highlighter
                searchWords={searchQuery.split(" ")}
                textToHighlight={article.summary}
              />

              <p>{article.updatedAt}</p>
              <Link
                to={`/${article.id}`}
                state={{ from: location, article: article }}
              >
                Read More
              </Link>
            </li>
          );
        })}
      </ul> */}
    </Container>
  );
};
