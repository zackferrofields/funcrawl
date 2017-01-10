const cheerio = require('cheerio');
const { Future } = require('ramda-fantasy');
const {
  curry, path, map, compose, traverse,
  filter, eqProps, propSatisfies, anyPass
} = require('ramda');
const urlParse = require('../urlParse');
const tryEither = require('../utils/tryEither');
const eitherToFuture = require('../utils/transforms/eitherToFuture');

// :: String -> Either Error Function
const load = tryEither(cheerio.load);

// :: String -> String -> Boolean
const startsWith = curry((x, y) => y.startsWith(x));

// :: Object -> Boolean
var isRelative = propSatisfies(startsWith('/'), 'href');

// :: Object -> Object -> Boolean
var isHost = eqProps('hostname');

// :: Object -> [Object] -> [Object]
const urlFilter = curry((url, urls) => filter(anyPass([isRelative, isHost(url)]), urls));

// ::String -> Future Error [Object]
const hrefParse = html =>
  eitherToFuture(load(html))
  .map($ => $('a').toArray())
  .map(map(path(['attribs', 'href'])))
  .chain(traverse(Future.of, compose(eitherToFuture, urlParse)));

// :: Future Error Object -> String -> Future Error [Object]
const htmlParse = url => html =>
  Future.of(urlFilter)
  .ap(url)
  .ap(hrefParse(html));

module.exports = htmlParse;
