const fp = require("fastify-plugin")

class TodoRepository
{

     constructor(db)
     {
        this.db = db;
     }


     addTodo(title,description)
     {
           const todo = {
              id : Math.round(Math.random()*10),
              title,
              description
           }

           this.db.push(todo)


     }


     getAll()
     {

       return this.db
 
     }


     getOne(id)
     {

        return this.db.find((todo) => {
            return todo.id === id

        })
     }


     updateTodo(id,title,description)
     {

         this.db = this.db.map((todo) => {

              if(!todo.id === id)
                return todo;

              if(title)
                todo.title = title;

              if(description)
                todo.description = description;


         })


     }


     deleteTodo(id)
     {

         this.db = this.db.filter((todo) => {

            if(!todo.id === id)
                return true;
            else
            return false;


         })


     }

}


async function repositoryPlugin(fastify,options)
{
   const db = fastify.db;
   console.log(db)
   const todoRepo = new TodoRepository(db)
   fastify.decorate("todoRepo",todoRepo)
}


module.exports = fp(repositoryPlugin)