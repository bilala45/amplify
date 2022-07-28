import { port } from "./config.js";
import express from "express";
import userAuth from "./routes/userAuth.js";

// create express app
const app = express();

// listen for requests at port
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});

// home page route
app.get("/", (req, res) => {
  res.send("homepage route works");
});

// user authentication routes
app.use("/login", userAuth);
