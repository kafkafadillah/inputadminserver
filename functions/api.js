const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const UserRoutes = require("../src/routes/userRoutes.js");

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://fbUser:f0fBuPpVSfTXep7N@form.wxgyose.mongodb.net/");
const db = mongoose.connection;

db.on("err", (err) => console.log(err));
db.once("open", () => console.log("Database Connected"));

app.get("/", (req, res) => {
  res.send("P Balapan gas ga");
});

app.use("/.netlify/functions/api/user", UserRoutes);

app.listen(5000, () => {
  console.log("Server is running and up....");
});

module.exports.handler = serverless(app);
