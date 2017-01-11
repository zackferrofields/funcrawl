const { Future } = require('ramda-fantasy');
const { compose, nth } = require('ramda');
const urlParse = require('./src/urlParse');
const htmlGet = require('./src/htmlGet');
const hrefParse = require('./src/hrefParse');
const eitherToFuture = require('./src/utils/transforms/eitherToFuture');

//:: Future Error Object
const url = Future.of(nth(2, process.argv))
  .chain(compose(eitherToFuture, urlParse));

url
  .chain(htmlGet)
  .chain(hrefParse(url))
  .fork(console.error, console.log);
