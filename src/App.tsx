import { Route, Routes } from "react-router-dom";
import { NewsFeed } from "./pages/NewsFeed";
import { ArticleDescription } from "./pages/ArticleDescription";
import { getNews } from "./utils/newsApi";
function App() {
  getNews();

  return (
    <Routes>
      <Route path="/" element={<NewsFeed />}></Route>
      <Route path="/:articleId" element={<ArticleDescription />}></Route>
    </Routes>
  );
}

export default App;
