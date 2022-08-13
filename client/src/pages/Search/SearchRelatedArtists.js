import axios from "axios";
import { getAccessToken } from "../../utils/spotify.js";

const SearchRelatedArtists = ({
  relatedArtist,
  setIsLoading,
  setArtistTracks,
  setArtistData,
}) => {
  const handleArtistClick = async (id) => {
    // closes search results window after submitting a search
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
    setIsLoading(false);
    setArtistTracks(response.data.recs);
    setArtistData(response.data.artist);
  };

  return (
    <div
      key={relatedArtist.id}
      className="mr-1 mt-1 hover:font-bold hover:cursor-pointer"
      onClick={() => handleArtistClick(relatedArtist.id)}
    >
      <img src={relatedArtist.img} className="h-14 w-14 rounded-full"></img>
      <div className="mx-auto w-12 text-xs mt-2 text-center break-words">
        {relatedArtist.name}
      </div>
    </div>
  );
};

export default SearchRelatedArtists;
