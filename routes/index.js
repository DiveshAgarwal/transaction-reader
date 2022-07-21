const {
  getUserTransaction,
} = require("../src/controllers/transactionController");

module.exports = (app) => {
  app.post("/user-transaction", getUserTransaction);
};
