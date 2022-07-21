/**
 * @module Transaction
 * @type service
 * @description business logic for transaction replated operations
 * @author Divesh Agarwal
 */
const got = require("got");
const config = require("../../config");
const { getPromiseResults } = require("../helpers");
const { getLatestValue } = require("../repositories/currencyRepo");
const {
  addTransactions,
  getTransactions,
} = require("../repositories/transactionRepo");

class TransactionService {
  /**
   * @param {object} data request parameter to get the user transactions
   * @description gets all the normal transactions of the user and saves in the DB
   * @returns transactions
   */
  async getUserTransactions(data) {
    // getting the current value of INR against ether
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${data.address}&startblock=0&endblock=99999999&sort=asc&apikey=${config.API_KEY}`;
    const res = await got(url, { method: "GET" });
    const obj = JSON.parse(res.body);
    const transactions = obj.result;
    // add all the transactions in the DB
    const result = await addTransactions(transactions);
    return transactions;
  }

  /**
   * @param {string} address account address of the user to perform operations
   * @description gets user account balance and current INR value of the account
   * @returns object
   */
  async getUserBalanceAndEthValue(address) {
    // getting data from DB
    const promises = await Promise.allSettled([
      getLatestValue(),
      getTransactions({ to: address }),
      getTransactions({ from: address }),
    ]);
    const results = getPromiseResults(promises);
    // storing the results in the variables
    const ethInr = results[0];
    const inrValue = ethInr[0].inrValue;

    const toTx = results[1][0]?.total || 0;
    const fromTx = results[2][0]?.total || 0;
    const balance = toTx - fromTx;

    // preparing result
    return {
      ethToInr: inrValue,
      balance,
    };
  }
}

module.exports = new TransactionService();
