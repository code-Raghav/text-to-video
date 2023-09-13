import { useState } from "react";

const InputField = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform the search or any other action here
    console.log("Search query:", searchQuery);
    setSearchQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Enter the link of PIB Press Release you want to convert..."
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
