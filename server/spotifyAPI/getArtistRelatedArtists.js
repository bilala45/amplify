import axios from "axios";

/**
 * Queries the Spotify API for an artist's related artists
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns [Promise]
 */
const reqArtistRelatedArtists = async (accessToken, artistId) => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${artistId}/related-artists`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.artists;
  } catch (error) {
    console.log(error.response.data);
  }
};

const getArtistRelatedArtists = async (accessToken, artistId) => {
  const relatedArtists = await reqArtistRelatedArtists(accessToken, artistId);
  const relatedArtistsArr = [];

  for (const relatedArtist of relatedArtists) {
    relatedArtistsArr.push({
      name: relatedArtist.name,
      img: relatedArtist.images[0].url,
    });
  }

  return relatedArtistsArr.slice(0, 5);
};

export default getArtistRelatedArtists;
