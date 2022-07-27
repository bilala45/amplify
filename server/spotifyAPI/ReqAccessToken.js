import "dotenv/config";
import axios from "axios";
import qs from "qs";

// credentials
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// helper method to generate base64 encoded authorization string
// format: Basic <base64 encoded client_id:client_secret>
const getAuthorizationHeader = () => {
  // creates a buffer from client credentials and encodes in base64 string
  const clientCredsBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  return "Basic " + clientCredsBase64;
};

// payload for post request to retrieve Spotify access token
const payload = {
  method: "POST",
  url: "https://accounts.spotify.com/api/token",
  headers: {
    // client credentials
    Authorization: getAuthorizationHeader(),
    // format in which data object is sent
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // stringify data as url query string (according to content-type header)
  data: qs.stringify({ grant_type: "client_credentials" }),
};

// post request to retrieve access token
const getAccessToken = async () => {
  // axios POST request
  try {
    // store response object and return access token
    const res = await axios(payload);
    return res.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

// export getAccessToken function for use by other
export default getAccessToken;

// MIGHT NOT NEED TO GENERATE NEW ACCESS TOKEN EVERY SINGLE TIME A CALL IS MADE (cache access token in database?)
