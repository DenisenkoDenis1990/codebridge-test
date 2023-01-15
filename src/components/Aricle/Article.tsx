import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Title, Description } from "./Article.styled";
import { Link } from "react-router-dom";

type ArticleProps = {
  title: string;
  description: string;
  id: number;
  image: string;
  state: object;
};

export const Article: FC<ArticleProps> = ({
  title,
  description,
  id,
  image,
  state,
}) => {
  return (
    <Card sx={{ maxWidth: 400 }} key={id}>
      <CardMedia
        sx={{ height: 217 }}
        image={image}
        title={id.toString()}
        component="img"
      />
      <CardContent>
        <Title
          searchWords={["nasa", "japan", "falcon"]}
          textToHighlight={title}
        ></Title>
        <Description
          searchWords={["nasa", "japan", "falcon"]}
          textToHighlight={description}
        ></Description>
      </CardContent>
      <CardActions>
        <Link to={`/${id}`} state={state}>
          Read More <TrendingFlatIcon />{" "}
        </Link>
      </CardActions>
    </Card>
  );
};
