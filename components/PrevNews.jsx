"use client";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsCardList = ({ data, setNewsId }) => {
  const hightlightsOnly = true;
  return (
    <div className="space-y-6 py-8 sm:gap-6">
      {data.map((news) => (
        <NewsCard
          key={news._id}
          news={news}
          hightlightsOnly={hightlightsOnly}
          setNewsId={setNewsId}
        ></NewsCard>
      ))}
    </div>
  );
};
const PrevNews = ({ setNewsId }) => {
  const [allNews, setAllNews] = useState([]);
  const fetchNews = async () => {
    const response = await fetch("/api/news");
    const data = await response.json();

    setAllNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="feed">
      {/* All News */}
      <h1 className="font-bold text-3xl">History</h1>
      <NewsCardList data={allNews} setNewsId={setNewsId} />
    </section>
  );
};

export default PrevNews;
