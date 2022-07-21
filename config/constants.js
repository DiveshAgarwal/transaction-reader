require("dotenv").config();

//------------------------------- Error messages --------------------------------//
const errors = {
  ERR_UNEXPECTED: { message: "Unexpected Error", status_code: 500 },
};

module.exports = {
  errors,
};
