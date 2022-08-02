import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist";
import { getAccessToken } from "../spotify.js";

const SearchBar = () => {
  // state variables
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  // retrieve token from local storage
  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  // get search results from server
  // runs after changes to searchInput state
  useEffect(() => {
    const getSearchResults = async () => {
      if (accessToken !== null && searchInput.length > 0) {
        const response = await axios.get("http://localhost:3001/api/search", {
          params: { accessToken, searchInput },
        });
        setSearchResults(response.data);
      }
    };

    getSearchResults();
  }, [searchInput]);

  return (
    <div className="mt-20 mx-auto max-w-screen-md">
      <div className="flex justify-center items-center h-12">
        <form className="w-full h-full">
          <input
            className="rounded-md w-full h-full px-6 outline-none bg-slate-200"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search for an Artist"
          />
        </form>
      </div>
      <div className="flex-col bg-slate-200 rounded-md z-10">
        {searchInput.length > 0 &&
          searchResults.length > 0 &&
          searchResults.map((artist) => (
            <Artist
              key={artist.id}
              id={artist.id}
              name={artist.name}
              img={artist.img}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
