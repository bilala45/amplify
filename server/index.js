// imports
import express from "express";

// create express app
const app = express();

// listen for requests at PORT 3001
// use 3001 because React runs at 3000 by default
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Artist-recommender server listening on port ${PORT}`);
});
