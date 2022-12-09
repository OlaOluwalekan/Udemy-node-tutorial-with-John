const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});

// MOST COMMON METHODS ARE:
// 1. app.get
// 2. app.post
// 3. app.put
// 4. app.delete
// 5. app.all
// 6. app.use
// 7. app.listen
