class Book {
  constructor(title, author, isbn) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks()
    books.map((book) => {
      UI.addBookToList(book)
    })
  }

  static addBookToList(book) {
    const list = document.getElementById('book-list') // table-body
    const row = document.createElement('tr') // making a new table row

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><i class="fa fa-times delete" aria-hidden="true" style='cursor: pointer'></i></td>
        `

    list.appendChild(row)
    this.clearFields()
  }

  static deleteBook(targetElement) {
    if (targetElement.classList.contains('delete')) {
      targetElement.parentElement.parentElement.remove()
      UI.showAlert('Deleted', 'alert')
    }
  }

  static showAlert(message, className) {
    const alertDiv = document.createElement('div')
    alertDiv.className = `${className}`
    alertDiv.appendChild(document.createTextNode(message))

    const container = document.querySelector('.input-section')
    const bookForm = document.getElementById('book-form')

    container.insertBefore(alertDiv, bookForm)

    setTimeout(() => {
      document.querySelector(`.${className}`).remove()
    }, 1500)
  }

  static clearFields() {
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
  }
}

class Store {
  static getBooks() {
    let books
    if (localStorage.getItem('books') === null) {
      books = []
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }

  static addBook(book) {
    const books = Store.getBooks()
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))
  }

  static removeBook(isbn) {
    const books = Store.getBooks()

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1)
      }
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks())

document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('Empty Field!', 'alert')
  } else {
    const book = new Book(title, author, isbn)
    UI.addBookToList(book)
    Store.addBook(book)
    UI.showAlert('Successfully Added', 'success')
  }
})

document.getElementById('book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target)
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)
})
