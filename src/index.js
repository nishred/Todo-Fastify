const app = require("./app")
const { PORT } = require("./config/server.config")

const fastify = require("fastify")({logger: true})


fastify.register(app)


fastify.get("/ping",(req,res) => {

   res.send({
    msg:  "ok"
   })

})

fastify.listen({port : PORT},(err) => {

  if(err)
    return console.log(err)

  console.log("The server is up and running")

} )

