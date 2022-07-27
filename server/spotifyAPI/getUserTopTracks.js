import getAccessToken from "./reqAccessToken.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

// top tracks parameters
// ! query parameters may be in the wrong order
const userTopTracksParams = qs.stringify({
  limit: 50,
  // top tracks from approximately last 6 months
  time_range: "medium term",
});

// payload for get request to retrieve results of artist albums query
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/me/top/tracks/?${userTopTracksParams}`,
  headers: {
    // access token
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

// retrieve artist's albums
const getUsersTopTracks = async () => {
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const data = await getUsersTopTracks();
console.log(data.items);
