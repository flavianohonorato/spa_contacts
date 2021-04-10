import axios from 'axios'

// get all
export async function all (context, page) {
  const res = await axios.get(`/api/v1/contacts?page=${page}`)
  context.commit('setList', res.data)

  return res.data
}

// get one
export async function one (context, options) {
  const { id } = options

  context.commit('setOne', {})
  const res = await axios.get(`/api/v1/contacts/${id}`)

  context.commit('setOne', res.data)
  return res.data
}

// create
export function create (context, formData) {
  return axios.post('/api/v1/contacts', formData)
}

// update
export async function update (context, options) {
  const { id, formData } = options

  const res = await axios.put(`/api/v1/contacts/${id}`, formData)
  return res.data
}

// remove
export function remove (context, id) {
  return axios.delete(`/api/v1/contacts/${id}`)
}
