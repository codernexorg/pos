import { CREDIT, DEBIT } from "./constant.js";

const actionCounter = (type, data) => {
  const state = {};
  switch (type) {
    case DEBIT:
      console.log("Hello");
    case CREDIT:
      console.log("Hello");
    default:
      return state;
  }
};
export default actionCounter;
