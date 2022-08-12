import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { getAccessToken } from "../../utils/spotify.js";

// component imports
import SearchArtistResult from "./SearchArtistResult";

const SearchBar = ({ setIsLoading, setArtistTracks }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // get search results from server
  // runs after changes to searchInput state
  useEffect(() => {
    const getSearchResults = async () => {
      const accessToken = getAccessToken();
      if (accessToken && searchInput.length > 0) {
        const response = await axios.get("http://localhost:3001/api/search", {
          params: { accessToken, searchInput },
        });
        setSearchResults(response.data);
      }
    };
    getSearchResults();
  }, [searchInput]);

  return (
    <div className="relative flex justify-between h-12 items-center rounded-lg bg-white shadow-2xl shadow-slate-700">
      <div className="px-4 text-md">
        <BsSearch />
      </div>
      <input
        className="rounded-md w-full mr-6 outline-none"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for an Artist"
      />

      <div className="absolute z-20 w-full top-12 bg-white shadow-2xl rounded-md shadow-slate-700">
        {searchInput.length > 0 &&
          searchResults.length > 0 &&
          searchResults.map((artist) => (
            <SearchArtistResult
              key={artist.id}
              id={artist.id}
              name={artist.name}
              img={artist.img}
              setSearchInput={setSearchInput}
              setArtistTracks={setArtistTracks}
              setIsLoading={setIsLoading}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
