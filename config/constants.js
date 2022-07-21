require("dotenv").config();

//------------------------------- Error messages --------------------------------//
const errors = {
  ERR_UNEXPECTED: { message: "Unexpected Error", status_code: 500 },
  ERR_ADDR_REQUIRED: { message: "User address is required", status_code: 400 },
};

module.exports = {
  errors,
};
