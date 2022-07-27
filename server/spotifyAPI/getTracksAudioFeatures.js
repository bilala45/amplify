import getAccessToken from "./reqAccessToken.js";
import artistTracks from "./getArtistTracks.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

console.log(artistTracks.size);

// query parameters
const audioFeatureParams = qs.stringify({ ids: trackIds });

// payload for get request to Spotify API to retrieve track audio features
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/audio-features?${audioFeatureParams}`,
  headers: {
    // access token
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

// retrieve artist's albums
const getAudioFeatures = async () => {
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//const data = await getAudioFeatures();
//console.log(data.items);
