import "dotenv/config";
import axios from "axios";
import qs from "qs";

// credentials
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
// data object
const data = { grant_type: "client_credentials" };
// authentication url
const url = "https://accounts.spotify.com/api/token";

// helper method to generate base64 encoded authorization string
// format: Basic <base64 encoded client_id:client_secret>
const getAuthorizationHeader = () => {
  // creates a buffer from client credentials and encodes in base64 string
  const clientCredsBase64 = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );
  return "Basic " + clientCredsBase64;
};

// post request to retrieve access token
const getAccessToken = async () => {
  // payload for post request
  const payload = {
    method: "POST",
    url: url,
    headers: {
      // client credentials
      Authorization: getAuthorizationHeader(),
      // format in which data object is sent
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // stringify data as url query string (according to content-type header)
    data: qs.stringify(data),
  };

  // axios POST request
  await axios(payload)
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
};

getAccessToken();
