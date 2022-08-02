import qs from "qs";
import axios from "axios";

// helper function to extract data from search results
const artistJSONRes = (data) => {
  return data.map((artist) => ({
    name: artist.name,
    id: artist.id,
    img: artist.images[0].url,
  }));
};

/**
 * Returns artist id for top search result for queried artist
 */
const getSearchResults = async (accessToken, artistName) => {
  // search query parameters
  const queryURLParams = qs.stringify({
    q: artistName,
    type: "artist",
    limit: 5,
  });

  // payload for request to spotify api to get search results for queried artist
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/search?${queryURLParams}`,
    headers: {
      // access token
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    // store response object and return items
    const res = await axios(payload);
    // return processed search results
    return artistJSONRes(res.data.artists.items);
  } catch (error) {
    console.log(error.response.data);
  }
};

export default getSearchResults;
