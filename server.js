const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const env = require("dotenv").config();

if (env.error) {
  throw env.error;
}

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Connected to the database!");
  } catch (error) {
    console.error("Connection failed!", error);
  }
};

connect();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
