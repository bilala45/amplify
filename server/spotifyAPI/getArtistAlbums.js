import getAccessToken from "./reqAccessToken.js";
import topResultID from "./getSearchResults.js";
import qs from "qs";
import axios from "axios";

// generate access token
const accessToken = await getAccessToken();

// query parameters
const urlAlbumParams = qs.stringify({
  include_groups: "album",
  limit: 50,
  // restricting market to CA removes some duplicates
  market: "CA",
});

// payload for get request to retrieve results of artist albums query
const payload = {
  method: "GET",
  url: `https://api.spotify.com/v1/artists/${topResultID}/albums/?${urlAlbumParams}`,
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
// console.log(data.items);

// save items array in data response object
const albumsArr = data.items;
// map to store album name, album ID, and number of tracks
const albumMap = new Map();

// iterate through array of objects in items object and save unique albums to hash map.
for (const album of albumsArr) {
  // disclude deluxe albums
  if (album.name.toLowerCase().includes("deluxe")) {
    continue;
  }
  // check if hash map contains key with current album name
  // If key is already in map, update key with current album if current album has more tracks
  if (
    !albumMap.has(album.name) ||
    albumMap.get(album.name).total_tracks < album.total_tracks
  ) {
    albumMap.set(album.name, {
      id: album.id,
      total_tracks: album.total_tracks,
    });
  }
}

// print entries of albumMap
console.log(albumMap);

export default albumMap;
