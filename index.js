const fastify = require('fastify')({
  logger: true
})
const port = 3000

const start = async () => {
  try {
    fastify.register(require('./routes'))
    await fastify.listen(port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
