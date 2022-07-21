/**
 * @type helper
 * @description helper functions required in the app
 * @author Divesh Agarwal
 */

/**
 * @param {object} promises list of promises
 * @description resolves promises to result set for easy handling
 * @returns promise results
 */
const getPromiseResults = (promises) => {
  const result = [];
  for (const element of promises) {
    if (element.status === "fulfilled") {
      result.push(element.value);
    }
  }
  return result;
};

module.exports = {
  getPromiseResults,
};
