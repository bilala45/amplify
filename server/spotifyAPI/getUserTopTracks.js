import qs from "qs";
import axios from "axios";

// retrieve user's top tracks
const reqUserTopTracks = async (accessToken) => {
  // top tracks parameters
  const userTopTracksParams = qs.stringify({
    // top tracks from approximately last 6 months
    time_range: "medium_term",
    limit: 50,
  });

  // payload for get request to retrieve results of artist albums query
  const payload = {
    method: "GET",
    url: `https://api.spotify.com/v1/me/top/tracks/?${userTopTracksParams}`,
    headers: {
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
 * Generates map of user's top tracks
 * key: track name, values: { track id }
 */
const getUserTopTracks = async (accessToken) => {
  const tracksMap = new Map();
  const userTracks = await reqUserTopTracks(accessToken);

  // iterate through tracks in album and add to map
  for (const track of userTracks) {
    tracksMap.set(track.name, { id: track.id });
  }

  return tracksMap;
};

export default getUserTopTracks;
