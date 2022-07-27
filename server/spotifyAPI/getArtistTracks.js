import albumMap from "./getArtistAlbums.js";
import getAccessToken from "./reqAccessToken.js";
import axios from "axios";
import qs from "qs";

// generate access token
const accessToken = await getAccessToken();

// query parameters
const albumTrackURLParams = qs.stringify({
  limit: 50,
});

// store artist's tracks
const artistTracks = new Map();

// iterate through values in albumMap, pull out the id and make a request using that id
// iterate through the tracks and add each track to a hash map

for (const value of albumMap.values()) {
  // payload for get request to retrieve album tracks for each album in map
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/albums/${value.id}/tracks?${albumTrackURLParams}`,
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
      return res.data.items;
    } catch (error) {
      console.log(error);
    }
  };

  const data = await albumTracks();

  // iterate through tracks in album and add to map
  for (const track of data) {
    if (!artistTracks.has(track.name)) {
      artistTracks.set(track.name, {
        duration_ms: track.duration_ms,
        id: track.id,
      });
    }
  }
}

export default artistTracks;
