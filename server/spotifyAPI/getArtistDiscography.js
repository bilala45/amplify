import getAccessToken from "./reqAccessToken.js";
import topResultID from "./getSearchResults.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

// query parameters
const queryParams = {
  include_groups: "album",
  limit: 50,
  market: "US",
};
const urlParams = qs.stringify(queryParams);

// payload for get request to retrieve results of artist albums query
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/artists/${topResultID}/albums/?${urlParams}`,
  headers: {
    // access token
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

// retrieve artist's albums
const getArtistAlbums = async () => {
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const data = await getArtistAlbums();
console.log(data);

// iterate through array of objects in items object and save unique albums to hash map.
// restricting market to US decreases the number of album results
// If albums have the same name, save the album with the higher number of tracks.
// If the number of tracks is the same, save the album released at a later date.

// get album tracks
// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums
