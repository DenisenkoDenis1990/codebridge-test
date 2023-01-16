import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";

export const ArticleDescription = () => {
  const location = useLocation();
  const article = location.state.article;
  const backUrlPath = useRef(location.state?.from ?? "/");

  return (
    <div>
      <div
        style={{
          height: "245px",
          maxWidth: "1440px",
          backgroundImage: `url(${article.imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          width: "1290px",
          boxSizing: "border-box",
          background: "#FFFFFF",
          border: "1px solid #EAEAEA",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          borderRadius: "5px",
          position: "absolute",
          top: "150px",
          left: "75px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "35px 75px 50px 75px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#363636",
            marginBottom: "50px",
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "1.5",
            color: "#000000",
          }}
        >
          {article.summary}
        </p>
      </div>
      <Link
        to={backUrlPath.current}
        style={{ position: "absolute", bottom: "45px", left: "150px" }}
      >
        {" "}
        Back to homepage
      </Link>
    </div>
  );
};
