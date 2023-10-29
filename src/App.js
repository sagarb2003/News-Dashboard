import { useEffect, useState } from "react";
import "./App.css";
import Nav_daily from "./components/Nav_daily";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const [category, setCategory] = useState("SPORTS");
  const [newsArray, setNewsArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://linesnews.onrender.com/api/news-datas?category=${category}`
      );
      console.log(news);
      setNewsArray(news.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi();
  }, [category]);

  const filterNews = () => {
    return newsArray.filter((article) =>
      article.attributes.headline?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="App">
      <Nav_daily setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsContent newsArray={searchQuery ? filterNews() : newsArray} />
      <Footer />
    </div>
  );
}

export default App;
