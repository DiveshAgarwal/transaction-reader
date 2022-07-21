/**
 * @module cron
 * @type cron
 * @description scheduled tasks of the project
 * @author Divesh Agarwal
 */

require("dotenv").config();
require("../../config/database");
const cron = require("node-cron");
const { updatePrices } = require("../scripts/priceUpdater");

// schedules script to update eth value every 10 mins
cron.schedule("*/10 * * * *", async () => {
  updatePrices();
});
