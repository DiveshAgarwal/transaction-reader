/**
 * @module currency
 * @type cron
 * @description function to update the price of ethereum
 * @author Divesh Agarwal
 */
const got = require("got");
const EthInr = require("../models/ethInr");

/**
 * @description function to update the price of supported erc20 tokens
 */

const priceUpdater = async () => {
  try {
    console.log("Updating price in DB");
    //get updated price from coingecko
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`;
    const data = await got(url);
    const res = JSON.parse(data.body);
    const r = await EthInr.create({ inrValue: res.ethereum.inr });
    console.log(r);
  } catch (error) {
    console.log(`Updating failed with error ${error}`);
  }
};

module.exports.updatePrices = () => priceUpdater();
