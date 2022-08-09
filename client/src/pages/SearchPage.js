import axios from "axios";
import { useState, useEffect } from "react";
import { getAccessToken } from "../spotify.js";
import { BsSearch } from "react-icons/bs";

// import components
import Artist from "../components/Artist";
import SongResult from "../components/SongResult";

const SearchPage = () => {
  // tracks user input in search bar
  const [searchInput, setSearchInput] = useState("");
  // artist results from user query
  const [searchResults, setSearchResults] = useState([]);
  const [artistTracks, setArtistTracks] = useState([]);
  const [accessToken, setAccessToken] = useState(getAccessToken());

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
  }, [accessToken, searchInput]);

  return (
    <div>
      {accessToken !== null ? (
        <div className="mx-auto max-w-screen-md">
          <div className="text-2xl sm:text-3xl text-center font-semibold">
            Your new favorite song is right around the corner.
          </div>

          <div className="mt-10">
            <form className="flex justify-between h-12 items-center rounded-md bg-white shadow-2xl shadow-slate-700">
              <div className="px-4 text-md">
                <BsSearch />
              </div>
              <input
                className="rounded-md w-full h-full pr-6 outline-none"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                type="text"
                placeholder="Search for an Artist"
              />
            </form>

            <div className="flex-col bg-white rounded-md absolute z-20 mx-auto w-full max-w-screen-md shadow-2xl shadow-slate-700">
              {searchInput.length > 0 &&
                searchResults.length > 0 &&
                searchResults.map((artist) => (
                  <Artist
                    key={artist.id}
                    id={artist.id}
                    name={artist.name}
                    img={artist.img}
                    setSearchInput={setSearchInput}
                    setArtistTracks={setArtistTracks}
                  />
                ))}
            </div>
          </div>

          <div className="pt-10 px-6 pb-24">
            {artistTracks.length > 0 &&
              artistTracks.map((song) => (
                <SongResult
                  key={song.id}
                  name={song.name}
                  explicit={song.explicit}
                  albumName={song.albumName}
                  duration={song.duration}
                  img={song.img}
                />
              ))}
          </div>
        </div>
      ) : (
        window.location.reload(false)
      )}
    </div>
  );
};

export default SearchPage;
