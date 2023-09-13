"use client";

import { useEffect, useState } from "react";

const NewsMain = ({ hightlightsOnly, newsId }) => {
  const [currNews, setCurrNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(`/api/news/${newsId}`);
    const data = await response.json();

    setCurrNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, newsId);

  return (
    <div>
      <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter  w-full h-fit">
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {currNews.title}
        </p>
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {currNews.date}
        </p>
        {hightlightsOnly == true || (
          <p className="my-4 font-satoshi text-sm text-gray-700">
            {currNews.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsMain;
