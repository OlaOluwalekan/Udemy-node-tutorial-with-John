const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "testing product routes" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product routes" });
};

module.exports = { getAllProductsStatic, getAllProducts };
