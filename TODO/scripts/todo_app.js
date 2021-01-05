let todoArray = getSavedTodos()

let filterObject = {
  searchText: '',
  hideCompleted: false,
}

renderTodos(filterObject)
countLeftTodos()

document.getElementById('search_field').addEventListener('input', (e) => {
  filterObject.searchText = e.target.value
  renderTodos(filterObject)
})

document
  .getElementById('hide_completed')
  .addEventListener('change', function (e) {
    filterObject.hideCompleted = e.target.checked
    renderTodos(filterObject)
  })

document.getElementById('todo_form').addEventListener('submit', (e) => {
  e.preventDefault()
  if (e.target.elements.addTodo.value === '') {
    //do nothing
  } else {
    const todoTitle = e.target.elements.addTodo.value.trim()
    addItem(todoTitle)
    e.target.elements.addTodo.value = ''
  }
})
