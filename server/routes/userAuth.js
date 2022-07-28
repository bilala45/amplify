import express from "express";
import qs from "qs";
import crypto from "crypto";
import { spotifyClientId, spotifyAuthRedirectURI } from "../config.js";
import getAccessToken from "../spotifyAPI/reqAccessToken.js";

const generateState = () => {
  const buf = crypto.randomBytes(32);
  return buf.toString("hex");
};

// initialize a router
const router = express.Router();

router.get("/", (req, res) => {
  const userAuthParams = qs.stringify({
    client_id: spotifyClientId,
    response_type: "code",
    redirect_uri: spotifyAuthRedirectURI,
    // ! generate secure state value
    state: generateState(),
    scope: "user-top-read",
  });

  res.redirect(`https://accounts.spotify.com/authorize?${userAuthParams}`);
});

// callback route after authentication
router.get("/callback", async (req, res) => {
  const code = req.query.code;
  const data = await getAccessToken(code);
  console.log(data);

  res.send({ msg: "callback works" });
});

export default router;
