"use client";

const NewsCard = ({ news, hightlightsOnly, setNewsId }) => {
  const handleNewsClick = () => {
    setNewsId(news._id);
  };

  return (
    <div className="prompt_card">
      <p
        className="my-4 font-satoshi text-sm text-gray-700 cursor-pointer"
        onClick={handleNewsClick}
      >
        {news.title}
      </p>
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
