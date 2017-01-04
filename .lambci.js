module.exports = {
  cmd: 'nave use 6 bash -c "npm i && npm test"',
  build: false,
  branches: {
    master: true,
    develop: true
  },
  notifications: {
    slack: {
      channel: '#bots_funcrawl'
    },
  }
}
