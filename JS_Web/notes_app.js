const todos = [{
    title: 'Go Gym',
    isCompleted: false 
},
{
    title: 'Study CSE',
    isCompleted: false 
},{
    title: 'Do Work',
    isCompleted: false 
}]

const filters = {
    searchText: ''
}

const renderNotes = function (todos, filters) {
    const filteredNotes = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filteredNotes.forEach(function (todo) {
        createParagraph(todo.title)
    })
}

renderNotes(todos, filters)

document.querySelector('#search_todo').addEventListener('click', function(e) {
    filters.searchText = document.querySelector('#input_field').value
    console.log(filters.searchText)
    renderNotes(todos, filters)
})

document.querySelector('#create_todo').addEventListener('click', function(e) {
    addTodo(todos, document.querySelector('#input_field').value)
})

function addTodo (todos, todoTitle) {
    todos.push({
        title: todoTitle,
        isCompleted: false
    })
    
    createParagraph(todoTitle)
}

function createParagraph (text) {
    const p = document.createElement('p')
    p.textContent = text
    document.querySelector('#todos').appendChild(p)
}