const { Either } = require('ramda-fantasy');
const { compose, tryCatch } = require('ramda');

// :: f -> a ~> Either Error f(a)
const tryEither = f => tryCatch(compose(Either.of, f), Either.Left);

module.exports = tryEither;
