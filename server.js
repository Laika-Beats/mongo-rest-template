require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to mongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("🌐🌐🌐 Connected to Database."));

// Allows server to accept JSON
app.use(express.json());

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

// Connect to localhost
app.listen(3000, () =>
  console.log("🌎🌎🌎 Server Started. Listening on http://localhost:3000/")
);
