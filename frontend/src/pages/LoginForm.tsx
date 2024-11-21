import axios from 'axios'
import React, { useState } from 'react'
import setAuthToken from '../services/setAuthToken'


const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData)
      const { token } = res.data
      // Store the token in localStorage
      localStorage.setItem('token', token)
      // Dynamically set the token in Axios headers
      setAuthToken(token)
      setMessage('Login successful!')
      window.location.href = '/dashboard' // Redirect after login
    } catch (err: any) {
      console.error(err.response?.data || err.message)
      setMessage(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        placeholder="Email"
        value={formData.email}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="Password"
        value={formData.password}
        required
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Login</button>
      {message && <p className="text-red-500">{message}</p>}
    </form>
  )
}

export default LoginForm
