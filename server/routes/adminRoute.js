
const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { verifyToken, verifyAdmin } = require("../middleware/authMiddleware");
const User = require("../models/User");


router.get("/profile", verifyToken, verifyAdmin, async (req, res) => {
  const admin = await User.findById(req.user.id).select("-password");
  res.json(admin);
});


router.put(
  "/profile",
  verifyToken,
  verifyAdmin,
  upload.single("profileImage"),
  async (req, res) => {
    try {
      const { name, gender, dob } = req.body;

      const admin = await User.findById(req.user.id);
      if (!admin) return res.status(404).json({ message: "Admin not found" });

      admin.name = name;
      admin.gender = gender;
      admin.dob = dob;

      if (req.file) {
        admin.profileImage = req.file.path;
      }

      await admin.save();

      res.json({
        message: "Profile updated",
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          gender: admin.gender,
          dob: admin.dob,
          profileImage: admin.profileImage,
          role: admin.role,
        },
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

module.exports = router;

