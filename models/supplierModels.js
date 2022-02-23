import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
  address: String,
  city: String,
  zip: String,
  country: String,
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Supplier = mongoose.model("supplier", supplierSchema);
export default Supplier;
