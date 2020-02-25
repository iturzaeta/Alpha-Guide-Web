import axios from 'axios'

const http = axios.create({
    baseURL: process.env.ALPHA_GUIDE_API || "http://localhost:3000",
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

export default {register, login, logout, profile, edit}