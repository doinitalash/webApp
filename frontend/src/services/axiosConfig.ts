import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
})

// Interceptor to dynamically update token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') // Retrieve the latest token
  if (token) {
    config.headers.Authorization = `Bearer ${token}` // Dynamically add Authorization header
  }
  return config
})

// Intercept responses to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
      if (error.response && error.response.status === 401) {
        // Clear token and redirect to login if unauthorized
        localStorage.removeItem('token')
        window.location.href = '/login' // Redirect to login
      }
      return Promise.reject(error)
    }
)

export default axiosInstance
