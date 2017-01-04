const test = require('tape');
const { Future } = require('ramda-fantasy');
const htmlGet = require('./htmlGet');

const url = 'https://zackferrofields.github.io/';

test('htmlGet', t => {
  t.plan(3);
  t.is(typeof htmlGet, 'function', 'is a function');
  t.true(htmlGet(url) instanceof Future, 'returns a `Future`');
  t.doesNotThrow(htmlGet, undefined, 'should not throw when passed `undefined`');
});
