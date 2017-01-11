const { Future, Either } = require('ramda-fantasy');

// :: Either a b ~> Future a b
const eitherToFuture = Either.either(Future.reject, Future.of);

module.exports = eitherToFuture;
