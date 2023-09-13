"use client";

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useSearchParams } from "next/navigation";

const NewsMain = ({ handleNewsClick, hightlightsOnly }) => {
  const searchParams = useSearchParams();
  const [newsId, setNewsId] = useState(searchParams.get("id"));

  const [currNews, setCurrNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(`/api/news/${newsId}`);
    const data = await response.json();

    setCurrNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCard
        key={currNews._id}
        news={currNews}
        handleNewsClick={handleNewsClick}
        hightlightsOnly={hightlightsOnly}
      ></NewsCard>
    </div>
  );
};

export default NewsMain;
