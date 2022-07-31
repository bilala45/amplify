import { port } from "./config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userAuthRoutes from "./routes/userAuth.js";
import searchRoutes from "./routes/search.js";

// create express app
const app = express();

// middleware
app.use(morgan("tiny"));
app.use(cors());

// handles request to home page
app.get("/", (req, res) => {
  // combines res.status(200).send('OK')
  // if we just send res.status(200), the request hangs
  res.sendStatus(200);
});

// handles user authentication routes
app.use("/api/login", userAuthRoutes);

// handles search routes
app.use("/api/search", searchRoutes);

// listen for requests at port
app.listen(port, () => {
  console.log(`Artist-recommender server listening on port ${port}`);
});
