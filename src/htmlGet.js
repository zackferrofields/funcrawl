const http = require('http');
const url = require('url');
const { Future, Either } = require('ramda-fantasy');
const { compose, tryCatch } = require('ramda');

//:: Either a b ~> Future a b
const eitherToFuture = Either.either(Future.reject, Future.of);

//:: String -> Either Error Object
const parse = tryCatch(compose(Either.of, url.parse), Either.Left);

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
  eitherToFuture(parse(url))
  .chain(httpGet);

module.exports = htmlGet;
