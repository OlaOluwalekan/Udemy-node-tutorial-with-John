const express = require("express");
const app = express();
const logger = require("./logger");
const auth = require("./authorize");
const morgan = require("morgan");

// req => middleware => res

app.use(morgan("tiny"));
// app.use([logger, auth]);

// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
