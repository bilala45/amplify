import express from "express";
import qs from "qs";
import { spotifyClientId, spotifyAuthRedirectURI } from "../config.js";

// initialize a router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("login route works");
});

// callback route after authentication
router.get("/callback", (req, res) => {
  res.send("callback works");
});

export default router;
