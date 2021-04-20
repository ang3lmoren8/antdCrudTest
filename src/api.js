import axios from 'axios'

const apiRoute = 'https://crudcrud.com/api/ddf1e6f39a9f46f5bd084d1ea8c1e04f'

const getTodos = () => axios.get(`${apiRoute}/todos`)

const createTodo = (todo) => axios.post(`${apiRoute}/todos`, todo)

const api = { getTodos, createTodo }

export default api
