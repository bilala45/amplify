import qs from "qs";
import axios from "axios";

/**
 * Queries the Spotify API for an artist's albums
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-artists-albums
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns [Promise]
 */
const reqArtistAlbums = async (accessToken, artistId) => {
  // query parameters
  const queryParams = qs.stringify({
    include_groups: "album",
    limit: 50,
    // restricting market to CA removes duplicates
    market: "CA",
  });

  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${artistId}/albums/?${queryParams}`,
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
 * Processes artist albums to find unique albums
 * @param accessToken Access token provided after auth
 * @param artistId The artist's Spotify ID
 * @returns [array of objects]
 */
const getArtistAlbums = async (accessToken, artistId) => {
  const albumsArr = await reqArtistAlbums(accessToken, artistId);
  const albumMap = {};

  return albumsArr.flatMap((album) => {
    // current album is in albumMap and has more tracks than stored album
    // OR album is not in album map
    if (
      (albumMap[album.name] &&
        album.total_tracks > albumMap[album.name].tracks) ||
      !albumMap[album.name]
    ) {
      // add album to albumMap for tracking
      albumMap[album.name] = { tracks: album.total_tracks };
      // add album to array
      return [
        {
          name: album.name,
          id: album.id,
          img: album.images[0].url,
          tracks: album.total_tracks,
        },
      ];
    }
    return [];
  });
};

export default getArtistAlbums;
