import axios from "axios";
import { getAccessToken } from "../../utils/spotify.js";
import blankProfile from "../../assets/imgs/blank-profile.png";

const SearchRelatedArtists = ({
  relatedArtist,
  setIsLoading,
  setArtistTracks,
  setArtistData,
}) => {
  // sets image for artists with no picture provided
  if (!relatedArtist.img.length) {
    relatedArtist.img = blankProfile;
  }

  const handleArtistClick = async (id) => {
    // closes search results window after submitting a search
    setIsLoading(true);

    // reset artist tracks
    setArtistTracks([]);
    // reset artist data
    setArtistData({});

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
    <div key={relatedArtist.id} className="mr-1 mt-1">
      <img
        onClick={() => handleArtistClick(relatedArtist.id)}
        src={relatedArtist.img}
        alt="related artist"
        className="h-14 w-14 rounded-full hover:border-2 hover:border-white hover:cursor-pointer"
      ></img>
      <div className="mx-auto w-12 text-xs mt-2 text-center break-words">
        {relatedArtist.name}
      </div>
    </div>
  );
};

export default SearchRelatedArtists;
