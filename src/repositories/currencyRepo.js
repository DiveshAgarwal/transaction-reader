/**
 * @module transaction
 * @type repository
 * @description DB operations related to transactions.
 * @author Divesh Agarwal
 */

const EthInr = require("../models/ethInr");

const currencyRepo = {
  /**
   * @description gets latest value of INR compared to 1 eth
   * @returns ethInr value
   */
  async getLatestValue() {
    return EthInr.find().sort({ createdAt: "desc" }).limit(1);
  },
};

module.exports = currencyRepo;
