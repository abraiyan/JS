class ToDo {
  constructor(id, title, status) {
    this.id = id
    this.title = title
    this.status = status
  }
}

class UI {
  static displayToDo() {
    const todoArray = Store.getTodo()

    const todoLeftCounter = document.getElementById('left-todo')
    todoLeftCounter.textContent = `You have ${
      Store.countLeftTodos().counter
    } task${Store.countLeftTodos().anExtraS} to do`

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
    Store.deleteTodo(id)
    this.displayToDo()
  }

  static addTodo(todoTitle) {
    const todoItem = new ToDo(uuidv4(), todoTitle, false)
    Store.addTodo(todoItem)
    this.displayToDo()
  }

  static showAlert(message, className) {
    const middleSection = document.querySelector('.middle-section')

    const alertDiv = document.createElement('div')
    alertDiv.className = `alert ${className}`
    alertDiv.appendChild(document.createTextNode(message))

    middleSection.appendChild(alertDiv)

    setTimeout(() => {
      middleSection.removeChild(alertDiv)
    }, 1500)
  }
}

class Store {
  static getTodo() {
    let todos
    if (localStorage.getItem('todos') === null) {
      todos = []
    } else {
      todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
  }

  static addTodo(todoItem) {
    let todos = this.getTodo()
    todos.push(todoItem)
    localStorage.setItem('todos', JSON.stringify(todos))
    UI.showAlert('TODO Added Successfully', 'message')
  }

  static deleteTodo(todoIndex) {
    let todos = this.getTodo()
    const index = todos.findIndex((todo) => {
      return todo.id === todoIndex
    })
    todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
    UI.showAlert('TODO Deleted Successfully', 'alert')
  }

  static countLeftTodos() {
    let counter = 0
    let anExtraS = ''
    this.getTodo().map((todo) => {
      if (!todo.status) {
        counter++
      }
    })
    if (counter > 1) anExtraS = 's'
    return { counter: counter, anExtraS: anExtraS }
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
