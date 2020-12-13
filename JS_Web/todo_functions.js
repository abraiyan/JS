
function getSavedTodos () {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

function addItem (todoTitle) {
    todoArray.push({
        id: uuidv4(),
        title: todoTitle,
        isCompleted: false
    })
    localStorage.setItem('todos', JSON.stringify(todoArray))
    countLeftTodos()
    renderTodos(filterObject)
}

function countLeftTodos () {
    let counter = 0
    todoArray.forEach(function (item) {
        if(!item.isCompleted) counter++
    })
    document.getElementById('left_todos').textContent = `You have ${counter} todos left to do`
}

function clearTodoDiv () {
    document.getElementById('todo_section').innerHTML = ''
}

function renderTodos (filterObject) {
    const filteredTodos = todoArray.filter(function (item) {
        const isIncluded = item.title.toLowerCase().includes(filterObject.searchText.toLowerCase())
        const showUncompleted = !filterObject.hideCompleted || !item.isCompleted
        return isIncluded && showUncompleted
    })

    clearTodoDiv()    
    filteredTodos.forEach(function (item) {
        appendChildAtTodoDiv(item)
    })
}

function removeTodo (noteID) {
    const index = todoArray.findIndex(function (item) {
        return item.id === noteID
    })
    todoArray.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todoArray))
    renderTodos(filterObject)
}

function makeTodoChecked (noteID, booleanValue) {
    const index = todoArray.findIndex(function (item) {
        return item.id === noteID
    })

    todoArray[index].isCompleted = booleanValue
    localStorage.setItem('todos', JSON.stringify(todoArray))
    renderTodos(filterObject)
}

function appendChildAtTodoDiv (item) {
    const todoDiv = document.createElement('div')
    const todoText = document.createElement('span')
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')

    removeButton.addEventListener('click', function (e) {
        removeTodo(item.id)
    })

    checkbox.addEventListener('change', function (e) {
        makeTodoChecked(item.id, e.target.checked)
    })

    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.isCompleted
    todoDiv.appendChild(checkbox)

    todoText.textContent = item.title
    todoDiv.appendChild(todoText)

    removeButton.textContent = 'x'
    todoDiv.appendChild(removeButton)

    document.getElementById('todo_section').appendChild(todoDiv)
}
