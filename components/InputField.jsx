import { useState } from "react";

const InputField = ({ setNewsId }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [id, setId] = useState();

  const fetchNewsId = async () => {
    const response = await fetch(`/api/news/link/${searchQuery}`);
    const data = await response.json();
    setId(data);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Search query:", searchQuery);
    fetchNewsId();
    setNewsId(id);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Enter the id of PIB Press Release you want to convert..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border border-gray-400 px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-500 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default InputField;
