import mongoose from "mongoose";

const custmoerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  address: String,
  city: String,
  zip: String,
  country: String,
  store: {
    type: String,
    required: true,
  },
  due: { type: Number, default: 0 },
  paid: { type: Number, default: 0 },
  products: {
    type: [String],
  },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Customer = mongoose.model("customer", custmoerSchema);
export default Customer;
