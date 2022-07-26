// imports
import "dotenv/config";
import express from "express";

// create express app
const app = express();

// listen for requests at PORT
app.listen(process.env.PORT, () => {
  console.log(
    `Artist-recommender server listening on port ${process.env.PORT}`
  );
});
