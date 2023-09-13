"use client";

const NewsCard = ({ news, handleNewsClick, hightlightsOnly }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer overflow-hidden"
          onClick={handleNewsClick}
        ></div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{news.title}</p>
      <p className="my-4 font-satoshi text-sm text-gray-700">{news.date}</p>
      {hightlightsOnly == true || (
        <p className="my-4 font-satoshi text-sm text-gray-700">
          {news.content}
        </p>
      )}
    </div>
  );
};

export default NewsCard;
