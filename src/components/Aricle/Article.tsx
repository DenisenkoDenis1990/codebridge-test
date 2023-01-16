import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Title, Description } from "./Article.styled";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

type ArticleProps = {
  title: string;
  description: string;
  id: number;
  image: string;
  state: object;
  searchQuery: Array<string>;
};

export const Article: FC<ArticleProps> = ({
  title,
  description,
  id,
  image,
  state,
  searchQuery,
}) => {
  return (
    <Grid item xs={12} md={4} alignSelf="stretch">
      <Card sx={{ position: "relative", height: "100%" }} key={id}>
        <CardMedia
          sx={{ height: 217 }}
          image={image}
          title={id.toString()}
          component="img"
        />
        <CardContent>
          <Title searchWords={searchQuery} textToHighlight={title}></Title>
          <Description
            searchWords={searchQuery}
            textToHighlight={description}
          ></Description>
        </CardContent>
        <CardActions
          sx={{
            position: "absolute",
            left: "10px",
            bottom: "0px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={`/${id}`} state={state}>
            Read More
          </Link>
          <TrendingFlatIcon />
        </CardActions>
      </Card>
    </Grid>
  );
};
