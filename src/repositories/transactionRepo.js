/**
 * @module transaction
 * @type repository
 * @description DB operations related to transactions.
 * @author Divesh Agarwal
 */

const { getPromiseResults } = require("../helpers");
const Transaction = require("../models/transaction");

const transactionRepo = {
  /**
   * @description adds new transactions for a user
   * @param {object} transactions data to be added into the trnsactions document
   * @returns transaction
   */
  async addTransactions(transactions) {
    const promises = [];
    // adding _id key to the document and adding to promise
    transactions.forEach((t) => {
      const r = {
        ...t,
        _id: t.hash,
      };
      promises.push(Transaction.findOrCreate(r));
    });
    // executing all the promises and getting results
    const results = await Promise.allSettled(promises);
    const res = getPromiseResults(results);
    return res;
  },

  /**
   * @description gets sum of the value from transactions based on the condition
   * @param {object} filter conditions to get transactions
   * @returns transaction
   */
  async getTransactions(filter) {
    // getting transactions based on the filter and adding the value
    return Transaction.aggregate([
      {
        $match: {
          ...filter,
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$value" },
          count: { $sum: 1 },
        },
      },
    ]);
  },
};

module.exports = transactionRepo;
