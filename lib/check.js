const sign = require('./sign');

module.exports = function check(appkey, query, body, hash) {
  return sign(appkey, query, body) === hash;
};