import qs from "qs";
import axios from "axios";

/**
 * Helper method to return artist id for top search result for queried artist
 */
const reqArtistAlbums = async (accessToken, artistId) => {
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
    url: `https://api.spotify.com/v1/artists/${artistId}/albums/?${urlAlbumParams}`,
    headers: {
      // access token
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  // axios GET request
  try {
    // store response object and return items
    const res = await axios(payload);
    return res.data.items;
  } catch (error) {
    console.log(error.response.data);
  }
};

/**
 * Returns map of artist albums
 * key: album name, values: { album id, number of tracks }
 */
const getArtistAlbums = async (accessToken, artistId) => {
  const albumsArr = await reqArtistAlbums(accessToken, artistId);
  const albumMap = new Map();

  // save unique albums to map
  // ! exclude deluxe albums for now (we want to include deluxe and remove original later)
  for (const album of albumsArr) {
    // disclude deluxe albums
    if (album.name.toLowerCase().includes("deluxe")) {
      continue;
    }

    // add unique albums to map
    // if album is already in map replace with album with more tracks
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

  return albumMap;
};

export default getArtistAlbums;
