const { sign, check } = require('./index');
const body = {
  a: 1,
  b: 2,
  d: 4,
  c: 3,
  e: [
    {
      x:1,
      y:2
    },
    "evio",
    true,
    123,
    {
      m: {
        n: 1,
        z: 5
      },
      k: {
        p:4,
        j:5,
        o: {
          e: 124,
          k: 'sssss'
        }
      }
    }
  ],
  f: {
    k: {
      p:4,
      j:5,
      o: {
        e: 124,
        k: 'sssss',
        a: [12,34]
      }
    }
  }
};
const query = 'a=1&b=2';
const appkey = 'evio';
const hash = sign(appkey, query, body);
console.log(hash);
console.log(check(appkey, query, body, hash));