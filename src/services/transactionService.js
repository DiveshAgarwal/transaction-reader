/**
 * @module Transaction
 * @type service
 * @description business logic for transaction replated operations
 * @author Divesh Agarwal
 */
const got = require("got");
const config = require("../../config");
const { addTransactions } = require("../repositories/transactionRepo");

class TransactionService {
  /**
   * @param {object} data request parameter to get the user transactions
   * @description gets all the normal transactions of the user and saves in the DB
   * @returns catalog
   */
  async getUserTransactions(data) {
    // checking if catalog exists for the user
    // transaction
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${data.address}&startblock=0&endblock=99999999&page=${data.page}&offset=${data.offset}&sort=asc&apikey=${config.API_KEY}`;
    const res = await got(url, { method: "GET" });
    const obj = JSON.parse(res.body);
    const transactions = obj.result;
    const result = await addTransactions(transactions);
    return transactions;
  }
}

module.exports = new TransactionService();
