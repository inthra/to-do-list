// business logic
var todoItems = [];


// user interface logic
$(document).ready(function(){
  $("form#blank").submit(function(event){
    event.preventDefault();
    var inputTodo = $("input#todo").val();
    todoItems.push(inputTodo);
    console.log(todoItems);


    $(".todo-list").append("<li class='todoNow'>" + inputTodo + "</li>");

    $(".todoNow").click(function(){
      $(this, "li").text("Done");
    });

  $("#todo").val("");
  });



});




// *******experimental code for counting through the array*******
// for (i=0; i <= todoItems.length; i += 1) {
//   $(".todo-list").append("<li class='todoNow'>" + todoItems[i] + "</li>");
//
//   $(".todoNow").click(function(){
//     $(this, "li").text("Done");
//   });
// }
