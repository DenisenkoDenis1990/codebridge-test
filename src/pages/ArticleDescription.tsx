import { useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const ArticleDescription = () => {
  const location = useLocation();
  const article = location.state.article;
  const backUrlPath = useRef(location.state?.from ?? "/");
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {}, []);
  navigate(backUrlPath.current, { replace: true });

  return (
    <>
      <img src={article.imageUrl} alt={article.id} />
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <Link to={backUrlPath.current}> Back to homepage</Link>
    </>
  );
};
