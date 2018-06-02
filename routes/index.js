const {graphiqlFastify, graphqlFastify} = require('fastify-graphql')
const requireText = require('require-text')
const {makeExecutableSchema} = require('graphql-tools')

const typeDefs = requireText('../schema.graphqls', require)
const resolvers = require('../resolvers')

const schema = makeExecutableSchema({typeDefs, resolvers})

const routes = async (fastify, options) => {
  fastify.register(graphqlFastify, {
    prefix: '/graphql',
    graphql: {
      schema,
      context: (request) => ({
        request,
        logFunction: fastify.log,
        logger: fastify.log
      })
    },
  })

  fastify.register(graphiqlFastify, {
    prefix: '/graphiql',
    graphiql: {
      endpointURL: '/graphql',
    }
  })
}

module.exports = routes
