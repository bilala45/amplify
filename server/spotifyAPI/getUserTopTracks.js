import qs from "qs";
import axios from "axios";

/**
 * Queries the Spotify API for a user's top tracks
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks
 * @param accessToken Access token provided after auth
 * @returns [Promise]
 */
const reqUserTopTracks = async (accessToken) => {
  const queryParams = qs.stringify({
    // top 50 tracks from approximately last 6 months
    time_range: "medium_term",
    limit: 50,
  });

  try {
    const res = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/me/top/tracks/?${queryParams}`,
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
 * Processes user's top tracks
 * @param accessToken Access token provided after auth
 * @returns [array of objects]
 */
const getUserTopTracks = async (accessToken) => {
  const userTracks = await reqUserTopTracks(accessToken);

  const tracksArr = [];
  for (const track of userTracks) {
    tracksArr.push({ name: track.name, id: track.id });
  }

  return tracksArr;
};

export default getUserTopTracks;
