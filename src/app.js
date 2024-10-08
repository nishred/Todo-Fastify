const fp = require("fastify-plugin")
const apiRouter = require("./routes/apiRouter")
const todoRepository = require("./repositories/todoRepository")
const todoService = require("./services/todoService")

const storage = require("./db/index")


async function app(fastify,options)
{
 
   fastify.register(apiRouter,{prefix : "/api"})

   fastify.register(storage)

   fastify.register(todoRepository)
   fastify.register(todoService)
}

module.exports = fp(app)