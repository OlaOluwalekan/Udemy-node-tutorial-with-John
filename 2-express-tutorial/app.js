// const { json } = require("express");
const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
// STATIC ASSET
app.use(express.static("./methods-public"));

// PARSE FORM DATE
app.use(express.urlencoded({ extended: false }));

// PARSE JSON DATA
app.use(express.json());

// GET PEOPLES ROUTE
app.use("/api/people", people);

// GET LOGIN ROUTER
app.use("/login", auth);

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
