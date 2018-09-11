const toString = Object.prototype.toString;

module.exports = function format(data) {
  if (Array.isArray(data)) return encodeArray(data);
  if (typeof data === 'object') return encodeObject(data);
  if (isBoolean(data)) return String(Number(data));
  return String(data);
};

function isBoolean(data) {
  return toString.call(data) === '[object Boolean]';
}

function encodeObject(data) {
  const keys = Object.keys(data).sort();
  const result = [];
  for (let i = 0, j = keys.length; i < j; i++) {
    const key = keys[i];
    const value = data[key];
    if (Array.isArray(value)) {
      result.push(key + '=' + encodeArray(value));
    } else if (typeof value === 'object') {
      result.push(key + '=' + encodeObject(value));
    } else if (isBoolean(value)) {
      result.push(key + '=' + Number(value));
    } else if (value) {
      result.push(`${key}=${value}`);
    }
  }
  return `{${result.join(',')}}`;
}

function encodeArray(data) {
  const result = [];
  for (let i = 0, j = data.length; i < j; i++) {
    const value = data[i];
    if (Array.isArray(value)) {
      result.push(i + '=' + encodeArray(value));
    } else if (typeof value === 'object') {
      result.push(i + '=' + encodeObject(value));
    } else if (isBoolean(value)) {
      result.push(i + '=' + Number(value));
    } else if (value) {
      result.push(i + '=' + value);
    }
  }
  return `[${result.join(',')}]`;
}