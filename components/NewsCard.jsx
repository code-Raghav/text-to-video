"use client";

const NewsCard = ({ news, hightlightsOnly, setNewsId }) => {
  const handleNewsClick = () => {
    setNewsId(news._id);
  };

  return (
    <div
      className="prompt_card hover:bg-slate-100 cursor-pointer"
      onClick={handleNewsClick}
    >
      <p className="my-4 font-inter text-sm text-gray-700 ">{news.title}</p>
      <p className="my-4 font-inter text-sm text-gray-700">{news.date}</p>
      {hightlightsOnly == true || (
        <p className="my-4 font-inter text-sm text-gray-700">{news.content}</p>
      )}
    </div>
  );
};

export default NewsCard;
