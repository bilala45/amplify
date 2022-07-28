import express from "express";

// initialize a router
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "this route works" });
});

export default router;
