import axios from 'axios'

const http = axios.create({
    baseURL: process.env.REACT_APP_ALPHA_GUIDE_API || "http://localhost:3000",
    withCredentials: true
})

http.interceptors.response.use(
    response => response.data,
    error => {
      if (error.response && error.response.status === 401) {
        localStorage.clear()
        window.location.assign('/login')
      }
  
      return Promise.reject(error)
    }
  )

const register = (data) => http.post('/users', data)
const login = ({ email, password }) => http.post('/login', { email, password })
const logout = () => http.post('/logout')
const profile = () => http.get('/profile')
const edit = (user) => http.patch('/users/profile', user)
const newTrip = (data, lat, lon) => http.post(`/trips/${lat}/${lon}`, data)
const findTrip = (id) => http.get(`/trip/${id}`)
const deleteTrip = (id) => http.post(`/trip/${id}/delete`)

export default {register, login, logout, profile, edit, newTrip, findTrip, deleteTrip}