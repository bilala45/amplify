import crypto from "crypto";
import qs from "qs";
import cookieParser from "cookie-parser";
import { spotifyClientId, spotifyAuthRedirectURI } from "../config.js";
import getTokenData from "../spotifyAPI/getTokenData.js";

// redirect user to spotify login page for authentication
const redirectAfterAuth = (req, res) => {
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: spotifyAuthRedirectURI,
    state: generateState(),
    scope: "user-top-read",
  });

  // returns 302 code (resource found)
  res.redirect(`https://accounts.spotify.com/authorize?${userAuthParams}`);
};

// retrieve user's top tracks and associated audio features
const getUserAccessToken = async (req, res) => {
  // redirect makes request to callback route with code and state values
  const code = req.query.code || null;
  const state = req.query.state || null;

  // check for mismatching state value
  if (state != null) {
    try {
      // generate access token
      const tokenData = await getTokenData(code);
      const accessToken = tokenData.access_token;
      const refreshToken = tokenData.refresh_token;

      // ! need to secure this eventually
      res.cookie("accessToken", accessToken, "refreshToken", refreshToken, {
        secure: true,
        httpOnly: true,
      });

      res.status(200);
      res.redirect("http://localhost:3000/results");
    } catch (error) {
      // redirect user to home page
      // ! should probably redirect to home page if an error occurs with retrieving the user data
      console.log("yahoo");
      res.status(400).redirect("http://localhost:3000");
    }
  } else {
    // redirect user to home page if state mismatch
    // ! homepage redirect should occur with querystring (set React router so that all routes except named routes go to login page)
    res.status(400).redirect("http://localhost:3000");
  }
};

/**
 * utility functions
 */

// // retrieve user's top tracks and associated audio features
// const retrieveUserTracks = async (req, res) => {
//   // redirect makes request to callback route with code and state values
//   const code = req.query.code || null;
//   const state = req.query.state || null;

//   // check for mismatching state value
//   if (state != null) {
//     // handle error in retrieving user's audio features
//     try {
//       const userAudioFeatures = await getUserAudioFeatures(code);
//       console.log(userAudioFeatures);
//       res.status(200);
//       res.redirect("http://localhost:3000/search");
//     } catch (error) {
//       // redirect user to home page
//       // ! should probably redirect to home page if an error occurs with retrieving the user data
//       res.status(400).redirect("http://localhost:3000");
//     }
//   } else {
//     // redirect user to home page if state mismatch
//     // ! homepage redirect should occur with querystring (set React router so that all routes except named routes go to login page)
//     res.status(400).redirect("http://localhost:3000");
//   }
// };

// generates secure state value
const generateState = () => {
  const buf = crypto.randomBytes(32);
  // hex to avoid non-url safe characters
  return buf.toString("hex");
};

export { redirectAfterAuth, getUserAccessToken };
