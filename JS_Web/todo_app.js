let todoArray = [{
    title: 'Do some HTML',
    isCompleted: true
},
{
    title: 'Cook Breakfast',
    isCompleted: false
},
{
    title: 'Again Coding',
    isCompleted: false
}]

let filterObject = {
    searchText: '',
    hideCompleted: false
}

function addItem (todoTitle) {
    todoArray.push({
        title: todoTitle,
        isCompleted: false
    })
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
        const p = document.createElement('p')
        p.textContent = item.title
        document.getElementById('todo_section').appendChild(p)
    })
}

renderTodos(filterObject)
countLeftTodos()

document.getElementById('search_field').addEventListener('input', function (e) {
    filterObject.searchText = e.target.value
    renderTodos(filterObject)
})

document.getElementById('hide_completed').addEventListener('change', function (e) {
    filterObject.hideCompleted = e.target.checked
    renderTodos(filterObject)
})

document.getElementById('todo_form').addEventListener('submit', function (e) {
    e.preventDefault()
    const todoTitle =  e.target.elements.addTodo.value
    addItem(todoTitle)
    renderTodos(filterObject)
})

