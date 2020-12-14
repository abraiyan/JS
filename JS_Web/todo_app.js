let todoArray = getSavedTodos()

let filterObject = {
  searchText: '',
  hideCompleted: false,
}

renderTodos(filterObject)
countLeftTodos()

document.getElementById('search_field').addEventListener('input', function (e) {
  filterObject.searchText = e.target.value
  renderTodos(filterObject)
})

document
  .getElementById('hide_completed')
  .addEventListener('change', function (e) {
    filterObject.hideCompleted = e.target.checked
    renderTodos(filterObject)
  })

document.getElementById('todo_form').addEventListener('submit', function (e) {
  e.preventDefault()
  const todoTitle = e.target.elements.addTodo.value
  addItem(todoTitle)
  e.target.elements.addTodo.value = ''
})
