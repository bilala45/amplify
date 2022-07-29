import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import userAuthRoutes from "./routes/userAuth.js";
import searchRoutes from "./routes/search.js";

// create express app
const app = express();

// listen for requests at port
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});

// logger middleware
app.use(morgan("tiny"));

// home page route
app.get("/", (req, res) => {
  res.send("homepage route works");
});

// user authentication routes
app.use("/login", userAuthRoutes);

// search routes
app.use("/search", searchRoutes);
