const url = 'http://127.0.0.1:9000';
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '**'
}

const login = (username, password) => {
  return fetch(`${url}/login`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify({username, password})
  })
    .then(response => response.json())
}

const fetchConnectedUser = () => {
  return fetch(`${url}/principal`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchRoles = () => {
  return fetch(`${url}/role`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const fetchAccounts = () => {
  return fetch(`${url}/user`, {
    method: 'GET',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
    .catch(error => console.log(error))
}

const publishLibrarian = (account) => {
  return fetch(`${url}/librarian`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const publishAgent = (account) => {
  return fetch(`${url}/agent`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const publishUser = (account) => {
  return fetch(`${url}/user`, {
    method: 'POST',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

const deleteAccount = (id) => {
  return fetch(`${url}/user/${id}`, {
    method: 'DELETE',
    mode: 'no-cors',
    headers: headers,
  })
    .then(response => response.json())
}

const updateAccount = (id, account) => {
  return fetch(`${url}/user/${id}`, {
    method: 'PUT',
    mode: 'no-cors',
    headers: headers,
    body: JSON.stringify(account)
  })
    .then(response => response.json())
}

export {
  fetchConnectedUser,
  fetchRoles,
  fetchAccounts,
  publishLibrarian,
  publishAgent,
  publishUser,
  deleteAccount,
  updateAccount,
  login
}
