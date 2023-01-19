import { Route, Routes } from "react-router-dom";
import { NewsFeed } from "./pages/NewsFeed/NewsFeed";
import { ArticleDescription } from "./pages/ArticleDescription/ArticleDescription";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsFeed />}></Route>
      <Route path="/:articleId" element={<ArticleDescription />}></Route>
    </Routes>
  );
}

export default App;
