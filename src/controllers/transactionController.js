/**
 * @module Transaction
 * @type controller
 * @description calling functions for transactions related APIs
 * @author Divesh Agarwal
 */

const { getUserTransactions, getUserBalanceAndEthValue } = require("../services/transactionService");

class TransactionController {
  async getUserTransaction(req, res, next) {
    try {
      const data = req.body;
      if (!data.address) {
        throw new Error("ERR_ADDR_REQUIRED");
      }
      res.locals.data = await getUserTransactions(data);
      next();
    } catch (err) {
      next(err);
    }
  }

  async getUserBalance(req, res, next) {
    try {
      if (!req.params.address) {
        throw new Error("ERR_ADDR_REQUIRED");
      }
      const data = req.params.address;
      res.locals.data = await getUserBalanceAndEthValue(data);
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TransactionController();
