import Fastify from "fastify"
import { quotes as DerpSSundeeQuotes } from "./quotes"

const fastify = Fastify({ logger: true })

fastify.get("/", function (request, reply) {
  reply.send(DerpSSundeeQuotes)
})

const run = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

run()
