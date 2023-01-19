import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Grid, Skeleton } from "@mui/material";
import { getNormalizedDate } from "../../utils/dateTransforming";
import {
  PublicationDate,
  CalendarIcon,
  ReadMoreLink,
  Title,
  Description,
} from "./Article.styled";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

type ArticleProps = {
  title: string;
  description: string;
  id: number;
  image: string;
  state: object;
  updatedAt: string;
  searchQuery: Array<string>;
  isFetching: boolean;
};

export const Article: FC<ArticleProps> = ({
  title,
  description,
  id,
  image,
  state,
  searchQuery,
  updatedAt,
  isFetching,
}) => {
  return (
    <Grid item xs={12} md={4} alignSelf="stretch">
      <Card sx={{ position: "relative", height: "100%" }} key={id}>
        {isFetching ? (
          <Skeleton variant="rectangular" height="217px"></Skeleton>
        ) : (
          <CardMedia
            sx={{ height: 217 }}
            image={image}
            title={id.toString()}
            component="img"
          />
        )}
        <CardContent sx={{ p: "25px", pb: "0px" }}>
          {isFetching ? (
            <Skeleton variant="text" width="40%" height="14px"></Skeleton>
          ) : (
            <PublicationDate>
              <CalendarIcon />
              {getNormalizedDate(updatedAt)}
            </PublicationDate>
          )}

          {isFetching ? (
            <Skeleton variant="text" height="40px"></Skeleton>
          ) : (
            <Title searchWords={searchQuery} textToHighlight={title}></Title>
          )}
          {isFetching ? (
            <Skeleton variant="text" height="160px"></Skeleton>
          ) : (
            <Description
              searchWords={searchQuery}
              textToHighlight={description}
            ></Description>
          )}
        </CardContent>
        <CardActions sx={{ mt: "20px", mb: "25px", ml: "25px" }}>
          {isFetching ? (
            <Skeleton variant="text" width="20%" height="14px"></Skeleton>
          ) : (
            <ReadMoreLink to={`/${id}`} state={state}>
              <span>Read More</span>
              <TrendingFlatIcon />
            </ReadMoreLink>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
