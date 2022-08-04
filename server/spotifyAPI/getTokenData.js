import {
  spotifyClientId,
  spotifyClientSecret,
  spotifyAuthRedirectURI,
} from "../config.js";
import axios from "axios";
import qs from "qs";

/**
 * Creates base64-encoded authorization string for authorization flow
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/get-an-albums-tracks
 * @returns String
 */
const getAuthorizationHeader = () => {
  const clientCredsBase64 = Buffer.from(
    `${spotifyClientId}:${spotifyClientSecret}`,
    "utf-8"
  ).toString("base64");
  return `Basic ${clientCredsBase64}`;
};

/**
 * Returns access token from Spotify API
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 * @param code Code provided in response to user log in
 * @returns {Promise}
 */
const getTokenData = async (code) => {
  const dataParams = qs.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: spotifyAuthRedirectURI,
  });

  try {
    const res = await axios({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization: getAuthorizationHeader(),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: dataParams,
    });
    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
};

export default getTokenData;
