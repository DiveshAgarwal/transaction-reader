/**
 * @type middleware
 * @description index file for middlewares
 * @author Divesh Agarwal
 */
const auth = require('./auth');
const appRequest = require('./appRequest');
const appResponse = require('./appResponse');
const validationMiddleware = require('./validator');

module.exports = { auth, appRequest, appResponse, validationMiddleware };
