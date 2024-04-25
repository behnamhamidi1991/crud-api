const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const env = require("dotenv").config();
const blogRoute = require("./routes/blog.route");

if (env.error) {
  throw env.error;
}

app.use(express.json());

app.use("/api/blog", blogRoute);

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Connection failed!", error);
  }
};

connect();
