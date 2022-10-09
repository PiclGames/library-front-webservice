const url = 'http://127.0.0.1:9000/';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}

const fetchConnectedUser = () => {
  return fetch(`${url}/principal`, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchRoles = () => {
  return fetch(`${url}/role`, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchAccounts = () => {
  return fetch(`${url}/user`, {
    method: 'GET',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const publishLibrarian = (account) => {
  return fetch(`${url}/librarian`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const publishAgent = (account) => {
  return fetch(`${url}/agent`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const publishUser = (account) => {
  return fetch(`${url}/user`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const deleteAccount = (id) => {
  return fetch(`${url}/user/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then(response => response.json())
}

const updateAccount = (id, account) => {
  return fetch(`${url}/user/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

