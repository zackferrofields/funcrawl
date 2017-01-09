const http = require('http');
const { Future } = require('ramda-fantasy');

//:: Object -> Future Error [String]
const httpGet = options => Future((reject, resolve) => {
  http.get(options, response => {
    let data;
    response.setEncoding('utf8');
    response.on('data', chunk => data = data+=chunk);
    response.on('end', () => resolve(data));
  }).on('error', reject);
});

module.exports = httpGet;
