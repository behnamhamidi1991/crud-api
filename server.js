require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoute = require("./routes/blog.route");

app.use(express.json());

app.use("/api/blog", blogRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

const fs = require("fs");
const dotenv = require("dotenv");
const envFilePath = "/app/.env";

if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  console.warn(
    ".env file not found. Ensure that environment variables are set."
  );
}

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

// VIEW
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});
