import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  // state variables
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");

    console.log(accessToken);
    console.log(refreshToken);
  }, []);

  // get search results from server
  // runs after changes to searchInput state
  useEffect(() => {
    const getSearchResults = async () => {
      const response = await axios.get("http://localhost:3001/api/search");
      console.log(response);
    };

    getSearchResults();
  }, [searchInput]);

  return (
    <div className="flex justify-center items-center h-12">
      <form className="w-full h-full px-12">
        <input
          className="rounded-full border-2 border-black w-full h-full px-6"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search for an artist"
        />
      </form>
    </div>
  );
};

export default SearchBar;
