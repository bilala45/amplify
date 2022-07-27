import { port } from "./config.js";
import express from "express";

// create express app
const app = express();

// listen for requests at PORT
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});
