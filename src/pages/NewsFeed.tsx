import { useState, useEffect } from "react";
import { getNews } from "../utils/newsApi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const location = useLocation();
  useEffect(() => {
    getNews()
      .then(setArticles)
      .catch((error) => console.log(error));
  }, []);

  console.log(location);

  return (
    <>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.id}>
              <img
                src={article.imageUrl}
                alt={article.id}
                style={{ width: 200 }}
                loading="lazy"
              />
              <h1>{article.title}</h1>
              <p>{article.summary}</p>
              <p>{article.updatedAt}</p>
              <Link to={`/${article.id}`}>Read More</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
