// business logic
function Task(inputTask) {
  this.whatTask = inputTask;
}

// user interface logic
$(document).ready(function(){
  $("form#blank").submit(function(event){
    event.preventDefault();
    var inputTodo = $("input#todo").val();
    var newTodo = new Task(inputTodo);

    $("ul.todo-list").append("<li>" + newTodo.whatTask + "</li>");

    $("li").last().dblclick(function(){
      $(this, "li").append(" - Done");
    });

    $("#remove").click(function(){
      $("li").remove(":contains('Done')")
    });

  $("#todo").val("");
  });
});
