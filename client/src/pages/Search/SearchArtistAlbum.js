import axios from "axios";
import { getAccessToken } from "../../utils/spotify.js";

const SearchArtistAlbum = ({
  album,
  artistId,
  setIsAlbumLoading,
  setArtistTracks,
}) => {
  const handleAlbumClick = async (artistId, albumId) => {
    // closes search results window after submitting a search
    setIsAlbumLoading(true);

    // reset artist tracks
    setArtistTracks([]);

    // retrieve access token from local storage
    const accessToken = getAccessToken();

    // send response to search submit endpoint to get artist discography
    const response = await axios.get(
      "http://localhost:3001/api/search/filter",
      {
        params: { accessToken, artistId, albumId },
      }
    );

    setIsAlbumLoading(false);
    setArtistTracks(response.data.recs);
  };

  return (
    <img
      onClick={() => handleAlbumClick(artistId, album.id)}
      key={album.id}
      src={album.img}
      alt="album cover"
      className="h-16 mr-1 mt-1 hover:border-white hover:border-4 hover:cursor-pointer"
    ></img>
  );
};

export default SearchArtistAlbum;
