const express = require("express");
const app = express();
require("dotenv").config();

const { connectToMongoDB } = require("./configs/mongoDb.configs");

app.use(express.json());

// Auth Middleware
const authMiddleware = require("./middlewares/auth.middleware");

// Auth Routes
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Garden Routes
const gardenRoutes = require("./routes/garden.routes");
app.use("/garden", authMiddleware, gardenRoutes);

app.listen(8000, () => {
  console.log("Server listining on PORT: ", 8000);
  connectToMongoDB();
});