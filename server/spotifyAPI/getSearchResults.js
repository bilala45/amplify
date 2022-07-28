import qs from "qs";
import axios from "axios";

// gets artist id for queried artist
const getArtistId = async (accessToken, artistName) => {
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
    const data = res.data.artists.items;
    // return id for top artist result
    return data[0].id;
  } catch (error) {
    console.log(error.response.data);
  }
};

export default getArtistId;
