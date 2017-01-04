const http = require('http');
const url = require('url');
const { Future } = require('ramda-fantasy');
const { compose } = require('ramda');

//:: Object -> Future Error [String]
const httpGet = options => Future((reject, resolve) => {
  http.get(options, response => {
    let data;
    response.setEncoding('utf8');
    response.on('data', chunk => data = data+=chunk);
    response.on('end', () => resolve(data));
  }).on('error', reject);
});

//:: String -> Future Error [String]
const htmlGet = compose(httpGet, url.parse);

module.exports = htmlGet;
