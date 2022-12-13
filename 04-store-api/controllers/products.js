const Products = require("../models/Products");

const getAllProductsStatic = async (req, res) => {
  // throw new Error("testing async errors");
  const products = await Products.find({ name: "vase table" });
  // const product = await Products.find((err,result)=>{

  // });
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === true ? true : false;
  }
  console.log(queryObject);
  const products = await Products.find(queryObject);
  res.status(200).json({ products });
};

module.exports = { getAllProductsStatic, getAllProducts };
