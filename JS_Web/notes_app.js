let todos = [{
    title: 'Go Gym',
    isCompleted: false
},
{
    title: 'Go Shopping',
    isCompleted: true
},
{
    title: 'Go Study',
    isCompleted: false
},
{
    title: 'Go Code',
    isCompleted: true
}]

const filterTodo = todos.filter(function (item) {
    return !item.isCompleted
})

const p = document.createElement('p')

p.textContent = `You have ${filterTodo.length} tasks left`
document.querySelector('body').appendChild(p)

todos.forEach(function (item) {
    const p = document.createElement('p')
    p.textContent = item.title
    document.querySelector('body').appendChild(p)
})