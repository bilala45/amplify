import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {
  redirectAfterAuth,
  getUserAccessToken,
  refreshUserToken,
} from "./controllers/userAuthController.js";

// create express app
const app = express();

// security middleware
app.use(helmet()); // protect tech stack
app.use(cors()); // allow client requests

// misc middleware
app.use(morgan("tiny")); // logger
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
app.get("/api/login", redirectAfterAuth);

// callback route to main page (after authentication)
app.get("/api/login/callback", getUserAccessToken);

// refreshes token after expiry
app.get("/api/login/refreshToken", refreshUserToken);

/**
 * Search routes
 */

// handles searches
app.get("/api/search", (req, res) => {
  res.send(req.cookies);
});

// handles submitting during search
app.get("/api/search/submit", (req, res) => {
  res.send("search submit route works");
});

// listen for requests at port
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});
