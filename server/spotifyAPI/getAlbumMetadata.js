import qs from "qs";
import axios from "axios";

/**
 * Queries the Spotify API for an album
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums
 * @param accessToken Access token provided after auth
 * @param albumId The album's Spotify ID
 * @returns [Promise]
 */
const reqAlbumMetadata = async (accessToken, albumId) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/albums/${albumId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

/**
 * Processes artist albums to find unique albums
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns [array of objects]
 */
const getAlbumMetadata = async (accessToken, albumId) => {
  const album = await reqAlbumMetadata(accessToken, albumId);

  return {
    name: album.name,
    id: album.id,
    img: album.images[0].url,
  };
};

export default getAlbumMetadata;
