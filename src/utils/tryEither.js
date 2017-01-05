const { Either } = require('ramda-fantasy');
const { compose, tryCatch } = require('ramda');

//:: Function ~> () -> Either a b
const tryEither = f => tryCatch(compose(Either.of, f), Either.Left);

module.exports = tryEither;
