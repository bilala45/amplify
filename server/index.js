import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  redirectAfterAuth,
  getUserAccessToken,
} from "../controllers/userAuthController.js";

// create express app
const app = express();

// middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(cookieParser());

// handles request to home page
app.get("/", (req, res) => {
  // combines res.status(200).send('OK')
  // if we just send res.status(200), the request hangs
  res.sendStatus(200);
});

/**
 * User authentication routes
 */

// handles user authentication by redirecting to Spotify authentication page
router.get("/api/login", redirectAfterAuth);

// callback route to main page (after authentication)
router.get("/callback", getUserAccessToken);

/**
 * Search routes
 */

// handles searches
router.get("api/search", (req, res) => {
  console.log(JSON.parse(JSON.stringify(req.cookies)));
});

// handles submitting during search
router.get("api/search/submit", (req, res) => {
  res.send("search submit route works");
});

// listen for requests at port
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});
