const results = require('./computerCategory')

const fetch = () => Promise.resolve({
  status: 200,
  ok: true,
  json: () =>  Promise.resolve(results),
});

module.exports = fetch;
