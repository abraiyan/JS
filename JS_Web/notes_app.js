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
countTodo()

document.querySelector('#input_field').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(todos, filters)
})

document.querySelector('#name_form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
})

function addTodo (todos, todoTitle) {
    todos.push({
        title: todoTitle,
        isCompleted: false
    })
    
    createParagraph(todoTitle)
    countTodo()
}

function createParagraph (text) {
    const p = document.createElement('p')
    p.textContent = text
    document.querySelector('#todos').appendChild(p)
}

function countTodo () {
    let counter = 0
    todos.forEach(function (todo) {
        if(!todo.isCompleted) {
            counter++
        }
    })
    const h1 = document.querySelector('#todo_status')
    h1.textContent = `You have ${counter} todos left`
}