

function getAllTodos(req,res)
{
 
    res.send({
    
      success : "ok",
      message : "The request has been processed successfully",
      data : this.todoService.getAll(),
      errpr : {}
          
    })


}


function getOneTodo(req,res)
{

    res.send({

        success : "ok",
      message : "The request has been processed successfully",
      data : this.todoService.getOne(req.params.id),
      error : {}

         
    })
 

}


function addTodo(req,res)
{


    this.todoService.addTodo(req.body.title,req.body.description)


     res.send({

      
  success : "ok",
      message : "The request has been processed successfully",
      data : {},
      errpr : {}
     })


}


function updateTodo(req,res)
{
    this.todoService.updateTodo(req.params.id,req.body.title,req.body.description);


    res.send({

      success : "ok",
      message : "The Todo has been updated successfully"

    })


}


function deleteTodo(req,res)
{

   this.todoService.deleteTodo(req.params.id)


   res.send({

      success : "ok",
      message : "The todo has been deleted successfully"
   })



}



module.exports = {

  getOneTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  addTodo
}