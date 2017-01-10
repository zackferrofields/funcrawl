const url = require('url');
const tryEither = require('../utils/tryEither');

//:: String -> Either Error Object
const parse = tryEither(url.parse);

module.exports = parse;
