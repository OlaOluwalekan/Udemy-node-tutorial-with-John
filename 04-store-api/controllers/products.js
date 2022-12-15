const Products = require("../models/Products");

const getAllProductsStatic = async (req, res) => {
  const products = await Products.find({ price: { $gt: 30, $lt: 100 } })
    .sort("price")
    .select("name price");

  res.status(200).json({ nbHits: products.length, products });
};

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    // const companyList = ["ikea", "caressa", "marcos", "liddy"];
    // queryObject.company = companyList.filter((co) => {
    //   return co.includes(company);
    // });

    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  // NUMERIC FILTERS
  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log(numericFilters);
    console.log(filters);
    const options = ["price", "rating"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject);
  let result = Products.find(queryObject);

  // SORT
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  // SELECT
  if (fields) {
    const fielsList = fields.split(",").join(" ");
    result = result.select(fielsList);
  }

  // PAGINATION
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ hitNo: products.length, products });
};

module.exports = { getAllProductsStatic, getAllProducts };
