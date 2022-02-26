import Sell from "../models/sellModels.js";
import Product from "../models/productModels.js";
import errorHandler from "../utils/errorHandler.js";
import Customer from "../models/customerModels.js";
export const addSell = async (req, res) => {
  const { productName, productQty, customerName, due, paid } = req.body;

  let products = await Product.find({ name: productName })
    .then((products) =>
      products.filter((item) =>
        parseInt(productQty.filter((qty) => item.qty >= qty).join())
      )
    )
    .catch((err) => errorHandler(err, 400, res));

  if (products.length < 1) {
    return errorHandler("out of stock, maybe add some product", 400, res);
  }

  for (let i = 0; i < productQty.length; i++) {
    if (products[i]?.qty) {
      products[i].qty = products[i].qty - productQty[i];
    } else {
      return errorHandler(
        `out of stock on the product, on  maybe add some product`,
        400,
        res
      );
    }
  }
  if (customerName === "Walking Customer" && !due) {
    console.log("Entering Walking Area");
    products.forEach(async (product) => await product.save());

    let sell = await Sell.create(req.body);

    res.status(200).json({ success: true, sell });
  } else if (customerName !== "Walking Customer") {
    console.log("Entering !walinkg");
    let customer = await Customer.findOne({ name: customerName });
    if (!customer) {
      return errorHandler("Due is not possible, With this customer", 400, res);
    }
    console.log(customer);
    customer.products += "," + productName;
    customer.due += due;
    customer.paid += paid;

    products.forEach(async (product) => await product.save());

    let sell = await Sell.create(req.body);

    await customer.save();

    res.status(200).json({ success: true, sell });
  } else {
    return errorHandler("Due is not possible, With Walking customer", 400, res);
  }
};

export const allSell = async (req, res) => {
  const sells = await Sell.find();

  res.status(200).json({ success: true, sells });
};
