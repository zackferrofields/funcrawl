const { Future } = require('ramda-fantasy');
const { nth } = require('ramda');
const htmlGet = require('./src/htmlGet');

//:: Future Error String
const url = Future.of(nth(2, process.argv));

url
  .chain(htmlGet)
  .fork(console.error, console.log);
