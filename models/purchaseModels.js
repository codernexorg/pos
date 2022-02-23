import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  supplier: {
    required: true,
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  paid: {
    type: String,
  },
  due: {
    type: String,
  },
  createdAt: {
    type: String,
    default: new Date(Date.now()).toISOString(),
  },
});

const Purchase = mongoose.model("purchase", purchaseSchema);

export default Purchase;
