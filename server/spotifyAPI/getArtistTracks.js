import albumMap from "./getArtistAlbums";
import getAccessToken from "./reqAccessToken";
import axios from "axios";
import qs from "qs";

// iterate through albumMap, pull out the id and make a request based on that id
// iterate through the tracks and add each track to a hash map

// generate access token
const accessToken = await getAccessToken();

// query parameters
const albumTrackURLParams = qs.stringify({
  limit: 50,
});

// payload for get request to retrieve album tracks
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/albums/${id}/tracks?${urlParams}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

// method to retrieve album tracks
const albumTracks = async () => {
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const data = await albumTracks();
