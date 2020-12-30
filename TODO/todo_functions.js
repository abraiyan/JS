getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')
  return todosJSON !== null ? JSON.parse(todosJSON) : []
}

saveTodos = (todoArray) => {
  localStorage.setItem('todos', JSON.stringify(todoArray))
}

addItem = (todoTitle) => {
  const timeStamp = moment().valueOf()

  todoArray.push({
    id: uuidv4(),
    title: todoTitle,
    description: 'Sample Description',
    isCompleted: false,
    createdAt: timeStamp,
    updatedAt: timeStamp,
  })

  saveTodos(todoArray)
  countLeftTodos()
  renderTodos(filterObject)
}

countLeftTodos = () => {
  let counter = 0
  todoArray.forEach((item) => {
    if (!item.isCompleted) counter++
  })
  document.getElementById(
    'left_todos'
  ).textContent = `You have ${counter} todos left to do`
}

clearTodoDiv = () => {
  document.getElementById('todo_section').innerHTML = ''
}

renderTodos = (filterObject) => {
  const filteredTodos = todoArray.filter((item) => {
    const isIncluded = item.title
      .toLowerCase()
      .includes(filterObject.searchText.toLowerCase())
    const showUncompleted = !filterObject.hideCompleted || !item.isCompleted
    return isIncluded && showUncompleted
  })

  clearTodoDiv()
  filteredTodos.forEach((item) => {
    appendChildAtTodoDiv(item)
  })
}

removeTodo = (noteID) => {
  const index = todoArray.findIndex((item) => item.id === noteID)
  todoArray.splice(index, 1)
  saveTodos(todoArray)
}

makeTodoChecked = (noteID, booleanValue) => {
  const todo = todoArray.find((item) => item.id === noteID)

  todo.isCompleted = booleanValue
  saveTodos(todoArray)
  renderTodos(filterObject)
  countLeftTodos()
}

appendChildAtTodoDiv = (item) => {
  const todoDiv = document.createElement('div')
  const todoText = document.createElement('a')
  const checkbox = document.createElement('input')

  checkbox.addEventListener('change', (e) => {
    makeTodoChecked(item.id, e.target.checked)
  })

  checkbox.setAttribute('type', 'checkbox')
  checkbox.checked = item.isCompleted
  todoDiv.appendChild(checkbox)

  todoText.textContent = item.title
  todoText.setAttribute('href', `/TODO/edit.html#${item.id}`)
  todoDiv.appendChild(todoText)

  document.getElementById('todo_section').appendChild(todoDiv)
}

generateLastEdited = (todoItem) => {
  return `Last Edited ${moment(todoItem.updatedAt).fromNow()}`
}
