const queryString = require('querystring');
const format = require('./format');
const md5 = require('md5-hex');

module.exports = function sign(appkey, query, body) {
  const result = [];
  if (query !== undefined && query !== null) {
    if (typeof query === 'string') query = queryString.parse(query);
    if (query.sign) delete query.sign;
    result.push(format(query));
  }
  if (body !== undefined && body !== null) {
    if (typeof body === 'string') body = queryString.parse(body);
    result.push(format(body));
  }
  result.push('appkey=' + appkey);
  return md5(result.join('#'));
};