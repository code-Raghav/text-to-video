"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LanguageDropdown from "./LanguageDropdown";

const NewsMain = ({ hightlightsOnly, newsId }) => {
  const [currNews, setCurrNews] = useState([]);
  const [videoUrl, setVideoUrl] = useState();
  const fetchNews = async () => {
    const response = await fetch(`/api/news/${newsId}`);
    const data = await response.json();
    setCurrNews(data);
  };

  useEffect(() => {
    fetchNews();
  }, [newsId]);

  const generateVideo = () => {
    setVideoUrl("https://youtu.be/keVjkYWTH3M?feature=shared");
  };
  return (
    <div>
      <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter  w-full h-fit">
        <h1 className="my-4 font-satoshi text-lg font-bold text-gray-700">
          {currNews.title}
        </h1>
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {currNews.date}
        </p>
        {hightlightsOnly == true || (
          <p
            className="my-4 font-satoshi text-md text-gray-700 whitespace-pre-line"
            id="content-news"
          >
            {currNews.content}
          </p>
        )}
        {videoUrl ? (
          ""
        ) : (
          <div className="w-full flex justify-center gap-3">
            <button
              type="button"
              className="outline_btn"
              onClick={generateVideo}
            >
              Generate
            </button>
            <LanguageDropdown />
          </div>
        )}
        {videoUrl ? (
          <div className="pt-8 flex justify-center">
            <ReactPlayer url={videoUrl} />
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default NewsMain;
