const todoArray = getSavedTodos()
const todoID = location.hash.substring(1)

const todoTitle = document.getElementById('todo_title')
const todoDescription = document.getElementById('todo_description')
const updatedTime = document.getElementById('last_updated_time')

const todoItem = todoArray.find((item) => item.id === todoID)

if (todoItem == undefined) {
  location.assign('/JS_Web/index.html')
}

todoTitle.value = todoItem.title
todoDescription.value = todoItem.description
updatedTime.textContent = generateLastEdited(todoItem)

todoTitle.addEventListener('input', (e) => {
  todoItem.title = e.target.value
  todoItem.updatedAt = moment().valueOf()
  updatedTime.textContent = generateLastEdited(todoItem)
  saveTodos(todoArray)
})

todoDescription.addEventListener('input', (e) => {
  todoItem.description = e.target.value
  todoItem.updatedAt = moment().valueOf()
  updatedTime.textContent = generateLastEdited(todoItem)
  saveTodos(todoArray)
})

document
  .getElementById('remove_todo_button')
  .addEventListener('click', function () {
    removeTodo(todoID)
    saveTodos(todoArray)
    location.assign('/JS_Web/index.html')
  })
