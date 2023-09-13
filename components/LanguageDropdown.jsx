import { useState } from "react";

const languageOptions = [
  "English",
  "Hindi",
  "Urdu",
  "Punjabi",
  "Gujarati",
  "Marathi",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Tamil",
  "Odia",
  "Bengali",
  "Assamese",
  "Manipuri",
];

function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="relative inline-flex">
      <select
        className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="">Select a language</option>
        {languageOptions.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
        </svg>
      </div>
    </div>
  );
}

export default LanguageDropdown;
