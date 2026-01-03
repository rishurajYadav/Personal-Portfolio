module.exports = (req, res, next) => {
  console.log("USER FROM TOKEN:", req.user); 

  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access denied" });
  }

  next();
};
