class ToDo {
  constructor(id, title, status) {
    this.id = id
    this.title = title
    this.status = status
  }
}

const todoArray = [
  {
    id: 1,
    title: 'Go to GYM',
    status: false,
  },
  {
    id: 2,
    title: 'Do some Study',
    status: true,
  },
  {
    id: 3,
    title: 'Pani Khao',
    status: false,
  },
]

class UI {
  static displayToDo() {
    const todoList = document.getElementById('todo-list')

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
        console.log('delete', todo.id)
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
}

document.addEventListener('DOMContentLoaded', UI.displayToDo())
