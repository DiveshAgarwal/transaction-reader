const mongoose = require("mongoose");
const config = require("./index");

const username = config.DB_USERNAME;
const password = config.DB_PASSWORD;
const cluster = config.DB_CLUSTER;
const dbname = config.DB_NAME;

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("mongodb is connected");
  }
);
