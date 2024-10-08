
const todoController = require("../../../../controllers/todoControllers")

async function todoRouter(fastify,options)
{
     fastify.get("/",todoController.getAllTodos)

     fastify.get("/:id",todoController.getOneTodo)

     fastify.post("/",todoController.addTodo)

     fastify.put("/:id",todoController.updateTodo)

      fastify.delete("/:id",todoController.deleteTodo)


}

module.exports = todoRouter