/**
 * @module Transaction
 * @type controller
 * @description calling functions for transactions related APIs
 * @author Divesh Agarwal
 */

const { getUserTransactions } = require("../services/transactionService");

class TransactionController {
  async getUserTransaction(req, res, next) {
    try {
      const data = req.body;
      res.locals.data = await getUserTransactions(data);
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TransactionController();
