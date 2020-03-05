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

const findCountries = () => http.get('/countries')


export default {findCountries}