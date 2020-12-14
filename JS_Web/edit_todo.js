const todoArray = getSavedTodos();
const todoID = location.hash.substring(1);

const todoTitle = document.getElementById("todo_title");
const todoDescription = document.getElementById("todo_description");

const todoItem = todoArray.find(function (item) {
  return item.id === todoID;
});

if (todoItem == undefined) {
  location.assign("/JS_Web/index.html");
}

todoTitle.value = todoItem.title;
todoDescription.value = todoItem.description;

todoTitle.addEventListener("input", function (e) {
  todoItem.title = e.target.value;
  saveTodos(todoArray);
});

todoDescription.addEventListener("input", function (e) {
  todoItem.description = e.target.value;
  saveTodos(todoArray);
});

document
  .getElementById("remove_todo_button")
  .addEventListener("click", function () {
    removeTodo(todoID);
    saveTodos(todoArray);
    location.assign("/JS_Web/index.html");
  });
