const fp = require("fastify-plugin")

class TodoService
{

   constructor(todoRepository)
   {
      this.todoRepository = todoRepository

   }

    
   addTodo(title,description)
   {

     this.todoRepository.addTodo(title,description)
     
   }

   getAll()
   {

        return this.todoRepository.getAll()

   }


   getOne(id)
   {
       return this.todoRepository.getOne(id)

   }


   updateTodo(id,title,description)
   {

       this.todoRepository.updateTodo(id,title,description);

   }

   deleteTodo(id)
   {

       this.todoRepository.deleteTodo(id)

   }

  


}


async function servicePlugin(fastify,options)
{
   const todoRepository  = fastify.todoRepo;

   const todoService = new TodoService(todoRepository)

   fastify.decorate("todoService",todoService);



}


module.exports = fp(servicePlugin)