import { port } from "./config.js";
import express from "express";
import userAuth from "./routes/userAuth.js";

// create express app
const app = express();

// listen for requests at PORT
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});

// set up router
app.use("/", userAuth);
