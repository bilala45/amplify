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
 * Converts ms to minutes:seconds
 * @param duration duration in ms
 * @returns String
 */
const msToMinSec = (duration) => {
  const totalSeconds = Math.trunc(duration / 1000);

  // strip decimal from minutes
  const minutes = Math.trunc(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

/**
 * Processes songs in an artist's album
 * @param accessToken Access token provided after auth
 * @param albumId The album's Spotify ID
 * @returns [array of one object]
 */
const getTracksForOneAlbum = async (accessToken, albumId, album) => {
  const albumTracks = [];
  const currAlbumTracks = await reqAlbumTracks(accessToken, albumId);

  // iterate through each track in album
  for (const track of currAlbumTracks) {
    albumTracks.push({
      name: track.name,
      albumName: album.name,
      img: album.img,
      duration: msToMinSec(track.duration_ms),
      id: track.id,
      explicit: track.explicit,
      link: track.external_urls.spotify,
    });
  }

  return albumTracks;
};

export default getTracksForOneAlbum;
