import { spotifyClientId } from "../config.js";
import axios from "axios";
import qs from "qs";

/**
 * Requests user authorization for access to user's top tracks
 */
const getUserAuth = async () => {
  // query parameters
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: "https://www.google.com/",
    // ! generate secure state value
    state: 12345,
    scope: "user-top-read",
  });

  // request payload
  const payload = {
    method: "GET",
    url: `https://accounts.spotify.com/api/authorize?${userAuthParams}`,
  };

  try {
    const res = await axios(payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

getUserAuth();

// export method for use by other api calls
export default getUserAuth;
