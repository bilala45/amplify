import express from "express";
import qs from "qs";
import crypto from "crypto";
import { spotifyClientId, spotifyAuthRedirectURI } from "../config.js";
import getUserAudioFeatures from "../spotifyAPI/userAudioFeatures.js";

// generates secure state value
const generateState = () => {
  const buf = crypto.randomBytes(32);
  return buf.toString("hex");
};

// initialize a router
const router = express.Router();

// handles base login route by redirecting to Spotify authentication page
router.get("/", (req, res) => {
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: spotifyAuthRedirectURI,
    state: generateState(),
    scope: "user-top-read",
  });

  res.redirect(`https://accounts.spotify.com/authorize?${userAuthParams}`);
});

// callback route after authentication
router.get("/callback", async (req, res) => {
  // save returned code and state values
  const code = req.query.code || null;
  const state = req.query.state || null;

  // check for wrong state value
  if (state != null) {
    const userTopTracks = await getUserAudioFeatures(code);
    res.send(userTopTracks);
  } else {
    // ! add error handling for null state
    res.send({ error: "state mismatch" });
  }
});

export default router;
