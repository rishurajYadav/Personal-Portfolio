

const express = require("express");
const router = express.Router();

const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// PUBLIC
router.get("/", getProjects);

// ADMIN ONLY
router.post("/", verifyToken, verifyAdmin, createProject);
router.put("/:id", verifyToken, verifyAdmin, updateProject);
router.delete("/:id", verifyToken, verifyAdmin, deleteProject);

module.exports = router;

