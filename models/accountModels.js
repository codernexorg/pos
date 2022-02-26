import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({});

const Account = mongoose.model("account", accountSchema);
export default Account;
