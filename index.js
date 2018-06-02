const fastify = require('fastify')()
const port = 3000

const start = async () => {
  try {
    fastify.register(require('./routes'))
    await fastify.listen(port)
    fastify.log.info({message: `Server running on port${port}`})
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
