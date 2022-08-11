import axios from "axios";
import { getAccessToken } from "../../utils/spotify.js";
import blankProfile from "../../assets/imgs/blank-profile.png";

const SearchArtistResult = ({
  id,
  name,
  img,
  setSearchInput,
  setArtistTracks,
  setIsLoading,
}) => {
  // sets image for artists with no picture provided
  if (!img.length) {
    img = blankProfile;
  }

  const handleArtistClick = async () => {
    // closes search results window after submitting a search
    setSearchInput("");
    setIsLoading(true);

    // reset artist tracks
    setArtistTracks([]);

    // retrieve access token from local storage
    const accessToken = getAccessToken();

    // send response to search submit endpoint to get artist discography
    const response = await axios.get(
      "http://localhost:3001/api/search/submit",
      {
        params: { accessToken, artistId: id },
      }
    );
    console.log(response);
    setIsLoading(false);
    setArtistTracks(response.data);
  };

  return (
    <button
      onClick={handleArtistClick}
      className="h-16 flex items-center text-left w-full bg-white hover:bg-slate-300 hover:cursor-pointer first:rounded-t-md last:rounded-b-md"
    >
      <img
        className="ml-3 max-h-12 w-12 rounded-full"
        src={img}
        alt={name}
      ></img>
      <div className="text-base sm:text-lg font-bold tracking-wide pl-4 pr-8">
        {name}
      </div>
    </button>
  );
};

export default SearchArtistResult;
