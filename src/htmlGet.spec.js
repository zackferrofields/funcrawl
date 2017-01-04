const test = require('tape');
const { Future } = require('ramda-fantasy');
const htmlGet = require('./htmlGet');

test('htmlGet', t => {
  t.plan(2);
  t.is(typeof htmlGet, 'function', 'is a function');
  t.true(htmlGet('') instanceof Future, 'returns a `Future`');
});
