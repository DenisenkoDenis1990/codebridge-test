import axios from "axios";

export const getNews = async () => {
  const response = await axios.get(
    "https://api.spaceflightnewsapi.net/v3/articles",
    {
      params: {
        _limit: 30,
      },
    }
  );

  return response.data;
};

