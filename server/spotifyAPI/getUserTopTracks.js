import qs from "qs";
import axios from "axios";

// retrieve artist's albums
const getUserTopTracks = async (accessToken) => {
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

export default getUserTopTracks;
