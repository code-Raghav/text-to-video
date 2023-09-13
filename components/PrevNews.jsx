"use client";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsCardList = ({ data, handleNewsClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((news) => (
        <NewsCard
          key={news._id}
          news={news}
          handleNewsClick={handleNewsClick}
        ></NewsCard>
      ))}
    </div>
  );
};
const PrevNews = () => {
  const [allNews, setAllNews] = useState([]);
  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();

    setAllNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleNewsClick = () => {};

  return (
    <section className="feed">
      {/* All News */}
      <NewsCardList data={allNews} handleNewsClick={handleNewsClick} />
    </section>
  );
};

export default PrevNews;
