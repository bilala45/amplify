import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import {
  redirectAfterAuth,
  getUserAccessToken,
} from "./controllers/userAuthController.js";
import {
  filterByAlbum,
  search,
  submit,
} from "./controllers/searchController.js";

// create express app
const app = express();

// security middleware
app.use(helmet()); // protect tech stack
app.use(cors()); // allow client requests

// misc middleware
app.use(morgan("tiny")); // logger

/**
 * User authentication routes
 */

// handles user authentication by redirecting to Spotify authentication page
app.get("/api/login", redirectAfterAuth);

// callback route to main page (after authentication)
app.get("/api/login/callback", getUserAccessToken);

/**
 * Search routes
 */

// handles searches
app.get("/api/search", search);

// handles submitting during search
app.get("/api/search/submit", submit);

// handles filtering results by album
app.get("/api/search/filter", filterByAlbum);

// listen for requests at port
app.listen(port, () => {
  console.log(`Amplify server listening on port ${port}`);
});
