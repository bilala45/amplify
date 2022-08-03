import axios from "axios";
import qs from "qs";

/**
 * Queries the Spotify API for an album's tracks
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks
 * @param accessToken Access token provided after auth
 * @param artistId The album's Spotify ID
 * @returns [Promise]
 */
const reqAlbumTracks = async (accessToken, albumId) => {
  const queryParams = qs.stringify({
    limit: 50,
  });

  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/albums/${albumId}/tracks?${queryParams}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.items;
  } catch (error) {
    console.log(error.response.data);
  }
};

/**
 * Processes songs in artist's albums to find unique tracks
 * @param accessToken Access token provided after auth
 * @param artistId Array of artist's albums
 * @returns [array of objects]
 */
const getArtistTracks = async (accessToken, albumsArr) => {
  // set of album tracks
  const trackSet = new Set();
  const albumTracks = [];

  for (const album of albumsArr) {
    // query Spotify for current album in array
    const currAlbumTracks = await reqAlbumTracks(accessToken, album.id);

    // iterate through each track in album
    for (const track of currAlbumTracks) {
      if (!trackSet.has(track.name)) {
        // add album to set for tracking and to array
        trackSet.add(track.name);
        albumTracks.push({ name: track.name, id: track.id });
      }
    }
  }

  return albumTracks;
};

export default getArtistTracks;
