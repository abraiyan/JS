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

    const deleteButton = document.createElement('td')
    deleteButton.className = 'delete'
    deleteButton.innerHTML = `<i class="fa fa-times" style='cursor: pointer' aria-hidden="true"></i>`

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        `

    row.appendChild(deleteButton)

    deleteButton.addEventListener('click', (e) => {
      Store.removeBook(book.isbn)
      UI.deleteBook()
    })

    list.appendChild(row)
    this.clearFields()
  }

  static deleteBook() {
    const list = document.getElementById('book-list') // table-body
    list.innerHTML = ''
    UI.showAlert('Book Deleted', 'alert')
    UI.displayBooks()
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
    }, 1200)
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
