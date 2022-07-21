/**
 * @module Transaction
 * @type model
 * @description DB model block chain transactions
 * @author Divesh Agarwal
 */

const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

const TransactionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
  timeStamp: {
    type: Number,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
  },
  blockHash: {
    type: String,
    required: true,
  },
  transactionIndex: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  gas: {
    type: Number,
    required: true,
  },
  gasPrice: {
    type: Number,
    required: true,
  },
  isError: {
    type: Number,
    required: true,
  },
  txreceipt_status: {
    type: Number,
    required: true,
  },
  input: {
    type: String,
    required: true,
  },
  contractAddress: String,
  cumulativeGasUsed: {
    type: Number,
    required: true,
  },
  gasUsed: {
    type: Number,
    required: true,
  },
  confirmations: {
    type: Number,
    required: true,
  },
  methodId: {
    type: String,
    required: true,
  },
  functionName: String,
});

TransactionSchema.plugin(findOrCreate);

module.exports = mongoose.model("Transaction", TransactionSchema);
