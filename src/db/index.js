const fp = require("fastify-plugin")


async function storage(fastify,options)
{
   fastify.decorate("db",[])
}

module.exports = fp(storage)