const http = require('http');
const url = require('url');
const { Future } = require('ramda-fantasy');
const { compose, tryCatch } = require('ramda');

//:: String -> Either Error Object
const parse = tryCatch(compose(Future.of, url.parse), Future.reject);

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
const htmlGet = url =>
  parse(url)
  .chain(httpGet);

module.exports = htmlGet;
