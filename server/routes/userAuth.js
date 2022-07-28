import express from "express";
import qs from "qs";
import { spotifyClientId, spotifyAuthRedirectURI } from "../config.js";

// initialize a router
const router = express.Router();

router.get("/", (req, res) => {
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: spotifyAuthRedirectURI,
    // ! generate secure state value
    state: 1234567891234567,
    scope: "user-top-read",
  });

  res.redirect(`https://accounts.spotify.com/authorize?${userAuthParams}`);
});

// callback route after authentication
router.get("/callback", (req, res) => {
  res.send("callback works");
});

export default router;
