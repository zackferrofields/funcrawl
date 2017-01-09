const http = require('http');
const url = require('url');
const { Future } = require('ramda-fantasy');
const tryEither = require('../utils/tryEither');
const eitherToFuture = require('../utils/transforms/eitherToFuture');

// :: String -> Either Error Object
const parse = tryEither(url.parse);

// :: Object -> Future Error String
const httpGet = options => Future((reject, resolve) => {
  http.get(options, response => {
    let data;
    response.setEncoding('utf8');
    response.on('data', chunk => data = data+=chunk);
    response.on('end', () => resolve(data));
  }).on('error', reject);
});

// :: String -> Future Error String
const htmlGet = url =>
  eitherToFuture(parse(url))
  .chain(httpGet);

module.exports = htmlGet;
