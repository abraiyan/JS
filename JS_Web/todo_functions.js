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

function appendChildAtTodoDiv (item) {
    const p = document.createElement('p')
    p.textContent = item.title
    document.getElementById('todo_section').appendChild(p)
}
