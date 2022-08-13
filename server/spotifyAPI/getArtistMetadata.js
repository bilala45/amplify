import axios from "axios";

/**
 * Queries the Spotify API for an artist's data
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns [Promise]
 */
const reqArtistMetadata = async (accessToken, artistId) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${artistId}`,
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

const getArtistMetadata = async (accessToken, artistId) => {
  const res = await reqArtistMetadata(accessToken, artistId);
  return {
    name: res.name,
    id: artistId,
    img: res.images[0].url,
  };
};

export default getArtistMetadata;
