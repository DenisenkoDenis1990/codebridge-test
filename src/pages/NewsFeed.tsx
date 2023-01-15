import { useState, useEffect, useMemo } from "react";
import { getNews } from "../utils/newsApi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import debounce from "lodash.debounce";
import Highlighter from "react-highlight-words";

export const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [filter, setFilter] = useState<String>("");
  const location = useLocation();
  useEffect(() => {
    getNews()
      .then(setArticles)
      .catch((error) => console.log(error));
    return () => {
      debouncedChangeHandler.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputHandler = (event: { target: { value: any } }) => {
    const { value } = event.target;
    const filtArr = value.split(" ");
    console.log(filtArr);
    setFilter(value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(inputHandler, 500), []);

  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(filter.toLowerCase()) ||
      article.summary.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <Container
      style={{
        maxWidth: "1440px",
        padding: "50px 75px",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <h2>Filter by keyword</h2>
      <input
        type="text"
        name="filter"
        placeholder="Enter keyword"
        onChange={debouncedChangeHandler}
      ></input>

      {filter.length > 1 && <p> Results: {filteredArticles.length}</p>}
      <ul>
        {filteredArticles.map((article) => {
          return (
            <li key={article.id}>
              <img
                src={article.imageUrl}
                alt={article.id}
                style={{ width: 200 }}
                loading="lazy"
              />

              <Highlighter
                searchWords={filter.split(" ")}
                textToHighlight={article.title}
              ></Highlighter>

              <Highlighter
                searchWords={filter.split(" ")}
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
      </ul>
    </Container>
  );
};
