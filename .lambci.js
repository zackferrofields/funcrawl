module.exports = {
  cmd: 'npm i && npm test',
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
