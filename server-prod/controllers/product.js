const errorHandler = require('../utils/errorHandler')
const Product = require('../models/Product')


module.exports.getProductAll = async function (req, res) {
  try {
    const products = await Product.find();

    res.status(200).json(products)
  } catch (e){
    errorHandler(res, e)
  }

}

