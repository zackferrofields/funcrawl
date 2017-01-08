const { Either } = require('ramda-fantasy');
const { compose, tryCatch } = require('ramda');

// :: (a -> b) -> a ~> Either Error b
const tryEither = f => tryCatch(compose(Either.of, f), Either.Left);

module.exports = tryEither;
