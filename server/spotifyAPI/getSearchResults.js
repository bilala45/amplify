import qs from "qs";
import axios from "axios";

/**
 * Processes search results from querying api for artist
 * @param artistSearchResults Array of artists
 * @returns []
 */
const processArtistSearch = (artistSearchResults) => {
  const artistArr = [];

  for (const artist of artistSearchResults) {
    if (artist.images.length > 0) {
      artistArr.push({
        name: artist.name,
        id: artist.id,
        img: artist.images[0].url,
      });
      // handles artist with no img
    } else {
      artistArr.push({
        name: artist.name,
        id: artist.id,
        img: "",
      });
    }
  }

  return artistArr;
};

/**
 * Queries the Spotify API to search for an artist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/search
 * @param accessToken Access token provided after auth
 * @param artistName User input string in search bar
 * @returns [Promise]
 */
const getSearchResults = async (accessToken, artistName) => {
  const queryParams = qs.stringify({
    q: artistName,
    type: "artist",
    limit: 5,
  });

  try {
    // store response object and return items
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?${queryParams}`,
      headers: {
        // access token
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return processArtistSearch(res.data.artists.items);
  } catch (error) {
    console.log(error);
  }
};

export default getSearchResults;
