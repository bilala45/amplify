import { useState, useEffect } from "react";
import axios from "axios";
import Artist from "./Artist";
import { getAccessToken } from "../spotify.js";

const SearchBar = () => {
  // state variables
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  // retrieve tokens from url params
  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  // get search results from server
  // runs after changes to searchInput state
  useEffect(() => {
    const getSearchResults = async () => {
      if (accessToken !== null) {
        const response = await axios.get("http://localhost:3001/api/search", {
          params: { accessToken, searchInput },
        });
        setSearchResults(response.data);
      }
    };

    getSearchResults();
  }, [searchInput]);

  return (
    <div>
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
      <div>
        {searchInput.length > 0 &&
          searchResults.length > 0 &&
          searchResults.map((artist) => (
            <Artist key={artist.id} name={artist.name} img={artist.img} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
