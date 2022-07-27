import getAccessToken from "./reqAccessToken.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

// search query parameters
const queryParams = {
  q: "Dua Lipa",
  type: "artist",
  limit: 5,
};
const urlParams = qs.stringify(queryParams);

// payload for get request to retrieve search results
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/search?${urlParams}`,
  headers: {
    // access token
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

// method to retrieve search results given query parameters
const searchResults = async () => {
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data.artists.items;
  } catch (error) {
    console.log(error);
  }
};

const data = await searchResults();
// save ID of top artist result and export
const topResultID = data[0].id;

export default topResultID;
