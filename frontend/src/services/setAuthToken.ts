import axios from 'axios'

const setAuthToken = (token: string | null): void => {
  if (token) {
    // Set the token in the Authorization header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    // Remove the Authorization header if no token
    delete axios.defaults.headers.common['Authorization']
  }
}

export default setAuthToken
