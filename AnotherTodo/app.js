class ToDo {
  constructor(id, title, status) {
    this.id = id
    this.title = title
    this.status = status
  }
}

const todoArray = []

class UI {
  static displayToDo() {
    const todoList = document.getElementById('todo-list')
    document.getElementById('todo-list').innerHTML = ``

    todoArray.map((todo) => {
      const todoContainer = document.createElement('div')
      todoContainer.className = 'container'

      if (todo.status) {
        todoContainer.classList.add('checked')
      }

      const checkButton = document.createElement('span')
      checkButton.innerHTML = `<i class="fa fa-check"></i>`
      checkButton.addEventListener('click', (e) => {
        if (todo.status === false) {
          todoContainer.classList.add('checked')
        } else {
          todoContainer.classList.remove('checked')
        }
        todo.status = !todo.status
      })

      const deleteButton = document.createElement('span')
      deleteButton.innerHTML = `<i class="fa fa-trash"></i>`
      deleteButton.addEventListener('click', (e) => {
        this.deleteTodo(todo.id)
      })

      const insideDiv = document.createElement('div')
      insideDiv.appendChild(checkButton)
      insideDiv.appendChild(deleteButton)

      todoContainer.innerHTML = `
        <p>${todo.title}</p>
        `
      todoContainer.appendChild(insideDiv)

      todoList.appendChild(todoContainer)
    })
  }

  static deleteTodo(id) {
    const index = todoArray.findIndex((todo) => {
      return todo.id === id
    })
    console.log(index)
    todoArray.splice(index, 1)
    this.displayToDo()
  }

  static addTodo(todoTitle) {
    const todoItem = new ToDo(uuidv4(), todoTitle, false)
    todoArray.push(todoItem)
    this.displayToDo()
  }
}

document.addEventListener('DOMContentLoaded', UI.displayToDo())

document.querySelector('.todo-form').addEventListener('submit', (e) => {
  const inputField = document.getElementById('todo-title')
  e.preventDefault()

  if (inputField.value === '') {
    console.log('Honto Hobena')
  } else {
    UI.addTodo(inputField.value)
    inputField.value = ''
  }
})
