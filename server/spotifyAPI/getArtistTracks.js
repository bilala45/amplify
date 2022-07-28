import axios from "axios";
import qs from "qs";

/**
 * Helper method to get an album's tracks given an album id
 */
const reqAlbumTracks = async (accessToken, albumId) => {
  const albumTrackURLParams = qs.stringify({
    limit: 50,
  });

  // payload to retrieve an album's tracks
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/albums/${albumId}/tracks?${albumTrackURLParams}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  // retrieve album tracks
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data.items;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Gets all tracks by an artist by querying tracks from artist albums
 * key: track name, values: { track id }

 */
const getArtistTracks = async (accessToken, albumMap) => {
  const tracksMap = new Map();

  // iterate through values in albumMap, pull out the id and make a request using that id
  // iterate through the tracks and add each track to a hash map
  for (const value of albumMap.values()) {
    const albumTracks = await reqAlbumTracks(accessToken, 5262525);

    // iterate through tracks in album and add to map
    for (const track of albumTracks) {
      if (!tracksMap.has(track.name)) {
        tracksMap.set(track.name, {
          id: track.id,
        });
      }
    }
  }

  return tracksMap;
};

export default getArtistTracks;
