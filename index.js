const { Future } = require('ramda-fantasy');
const { nth } = require('ramda');
const htmlGet = require('./src/htmlGet');

const argv = new Future((reject, resolve) => resolve(process.argv));
const url = argv.map(nth(2));

url
  .chain(htmlGet)
  .fork(console.error, console.log);
