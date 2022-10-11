const url = 'http://127.0.0.1:8080'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '**',
}

const publishBook = (book) => {
  return fetch(`${url}/books/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(book)
  })
    .then(response => response.json())
}

const publishBorrowing = (borrowing) => {
  return fetch(`${url}/borrowings/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(borrowing)
  })
    .then(response => response.json())
}

const publishAuthor = (author) => {
  return fetch(`${url}/authors/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(author)
  })
    .then(response => response.json())
}

const publishPublisher = (publisher) => {
  return fetch(`${url}/publishers/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(publisher)
  })
    .then(response => response.json())
}

const fetchAuthors = () => {
  return fetch(`${url}/authors/`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchPublishers = () => {
  return fetch(`${url}/publishers/`,{
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchBooks = () => {
  return fetch(`${url}/books/`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchBorrowings = () => {
  return fetch(`${url}/borrowings/`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const deleteBook = (id) => {
  return fetch(`${url}/books/${id}`, {
    method: 'DELETE',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const deleteBorrowing = (id) => {
  return fetch(`${url}/borrowings/${id}`, {
    method: 'DELETE',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const deleteAuthor = (id) => {
  return fetch(`${url}/authors/${id}`, {
    method: 'DELETE',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const deletePublisher = (id) => {
  return fetch(`${url}/publishers/${id}`, {
    method: 'DELETE',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

export {
  publishBook,
  fetchAuthors,
  fetchPublishers,
  fetchBorrowings,
  fetchBooks,
  deleteBook,
  deleteBorrowing,
  deleteAuthor,
  deletePublisher,
  publishBorrowing,
  publishAuthor,
  publishPublisher
}
