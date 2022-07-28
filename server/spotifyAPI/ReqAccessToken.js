import { spotifyClientId, spotifyClientSecret } from "../config.js";
import axios from "axios";
import qs from "qs";

// helper method to generate base64 encoded authorization string for client credentials
// format: Basic <base64 encoded client_id:client_secret>
const getAuthorizationHeader = () => {
  // creates a buffer from client credentials and encodes in base64 string
  const clientCredsBase64 = Buffer.from(
    `${spotifyClientId}:${spotifyClientSecret}`,
    "utf-8"
  ).toString("base64");
  return `Basic ${clientCredsBase64}`;
};

/**
 * Requests and returns an access token from the Spotify API
 */
const getAccessToken = async () => {
  // request payload
  const payload = {
    method: "POST",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      // client credentials
      Authorization: getAuthorizationHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({ grant_type: "client_credentials" }),
  };

  try {
    const res = await axios(payload);
    return res.data.access_token;
  } catch (error) {
    console.log(error.response.data);
  }
};

// export method for use by other api calls
export default getAccessToken;
