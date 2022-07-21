/**
 * @module ethInr
 * @type model
 * @description DB model to save the value of INR against eth
 * @author Divesh Agarwal
 */

const mongoose = require("mongoose");

const EthInrSchema = new mongoose.Schema(
  {
    inrValue: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EthInr", EthInrSchema);
