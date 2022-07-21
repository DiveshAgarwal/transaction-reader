const {
  getUserTransaction,
  getUserBalance,
} = require("../src/controllers/transactionController");

module.exports = (app) => {
  app.post("/user-transaction", getUserTransaction);
  app.get("/user-balance/:address", getUserBalance);
};
