import express from "express";
import {
  redirectAfterAuth,
  retrieveUserTracks,
} from "../controllers/userAuthController.js";

/**
 * handles /login routes
 */

// initialize a router
const router = express.Router();

// handles user authentication by redirecting to Spotify authentication page
router.get("/", redirectAfterAuth);

// callback route to main page (after authentication)
router.get("/callback", retrieveUserTracks);

export default router;
