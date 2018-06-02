const {getTest} = require('./services/get-test')

module.exports = {
  Query: {
    test: (parent, args, context) => {
      return getTest()
    }
  }
}
