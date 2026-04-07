const express = require("express");
const router = express.Router();
const db = require("../db"); // your PostgreSQL connection

// ✅ Get states
router.get("/states", async (req, res) => {
  const result = await db.query("SELECT DISTINCT state FROM villages_data ORDER BY state");
  res.json(result.rows);
});

// ✅ Get districts
router.get("/districts/:state", async (req, res) => {
  const { state } = req.params;

  const result = await db.query(
    "SELECT DISTINCT district FROM villages_data WHERE state=$1 ORDER BY district",
    [state]
  );

  res.json(result.rows);
});

// ✅ Get villages
router.get("/villages/:district", async (req, res) => {
  const { district } = req.params;

  const result = await db.query(
    "SELECT village FROM villages_data WHERE district=$1 ORDER BY village",
    [district]
  );

  res.json(result.rows);
});

// ✅ ⭐ Village Count API (for graph)
router.get("/village-count/:district", async (req, res) => {
  const { district } = req.params;

  try {
    const result = await db.query(
      "SELECT COUNT(*) FROM villages_data WHERE district=$1",
      [district]
    );

    res.json({
      count: parseInt(result.rows[0].count)
    });

  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;