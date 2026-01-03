const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// DB Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/admin", require("./routes/authRoutes"));

//app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/admin", require("./routes/adminRoute"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Test route
//app.use("/uploads", express.static("uploads"));

// contact us routes 

app.use("/api", require("./routes/contactRoutes"));

app.get("/", (req, res) => {
  res.send(" Portfolio Backend Running");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(` Server running on port ${PORT}`)
);
