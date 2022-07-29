import express from "express";

/**
 * handles /search routes
 */

const router = express.Router();

// handles searches
router.get("/", (req, res) => {
  res.send("search route works");
});

// handles submitting during search
router.get("/submit", (req, res) => {
  res.send("search submit route works");
});

export default router;
