/**
 * @type middleware
 * @description middleware for error and success responses
 * @author Divesh Agarwal
 */
const constants = require("../../config/constants");

const success = (req, res, next) => {
  if (!req || req.route.path === "/*") {
    return next(new Error("404"));
  }
  const status = res.locals.status || 200;
  return res.status(status).send({ data: res.locals.data });
};

const error = (err, req, res, next) => {
  if (err.message === "404") {
    return res
      .status(404)
      .send(
        `Requested URL ${
          req.protocol + "://" + req.get("host") + req.originalUrl
        } not found`
      );
  }
  console.log(err); // logging
  const error =
    constants.errors[err.message] || constants.errors["ERR_UNEXPECTED"];
  return res.status(error.status_code).send(err.details || error.message);
};

module.exports = { error, success };
