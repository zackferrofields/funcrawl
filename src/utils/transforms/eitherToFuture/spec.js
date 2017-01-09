const test = require('tape');
const { Future, Either } = require('ramda-fantasy');
const eitherToFuture = require('../eitherToFuture');

test('eitherToFuture', t => {
  t.plan(4);
  t.is(typeof eitherToFuture, 'function', 'is a function');
  t.true(eitherToFuture(Either.of()) instanceof Future, 'returns a `Future`');
  eitherToFuture(Either.Left('should `reject`')).fork(t.pass, t.fail);
  eitherToFuture(Either.Right('should `resolve`')).fork(t.fail, t.pass);
});
