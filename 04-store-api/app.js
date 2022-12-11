require("dotenv").config();
const connectDB = require("./db/connect");
// ASYNC ERRORS
require("express-async-errors");

const express = require("express");
const app = express();
const products = require("./routes/products");

const notFoundMiddleware = require("./middleware/not-found");
const errorMidleware = require("./middleware/error-handlers");

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1>
  <a href="/api/v1/products">Products Route</a>`);
});

app.use("/api/v1/products", products);
// app.use("/api/v1/products", getAllProductsStatic);

// PRODUCTS

app.use(notFoundMiddleware);
app.use(errorMidleware);

// app.listen
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
