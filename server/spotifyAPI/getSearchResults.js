import getAccessToken from "./reqAccessToken.js";
import qs from "qs";

// generate access token
const accessToken = await getAccessToken();

// search query parameters
const queryParams = {
  q: "Kend",
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
  },
};
