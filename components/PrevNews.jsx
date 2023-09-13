"use client";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsCardList = ({ data, handleNewsClick = false }) => {
  const hightlightsOnly = true;
  return (
    <div className="mt-16 space-y-6 py-8 sm:gap-6">
      {data.map((news) => (
        <NewsCard
          key={news._id}
          news={news}
          handleNewsClick={handleNewsClick}
          hightlightsOnly={hightlightsOnly}
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
