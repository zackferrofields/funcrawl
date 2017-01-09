const test = require('tape');
const { Either } = require('ramda-fantasy');
const tryEither = require('../tryEither');

const fn = (bol = true) => {
  if (bol) throw new Error();
};

test('tryEither', t => {
  t.plan(4);
  t.is(typeof tryEither, 'function', 'is a function');
  const fnEither = tryEither(fn);
  t.doesNotThrow(fnEither, undefined, 'should not throw an `Error`');
  Either.either(() => t.pass('should be a `Left`'), t.fail, fnEither());
  Either.either(t.fail, () => t.pass('should be a `Right`'), fnEither(false));
});
