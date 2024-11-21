import axios from 'axios'
import { useState } from 'react'

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData)
      setMessage(res.data.message || 'Registration successful!')
    } catch (err: any) {
      console.error('Error:', err.response?.data || err.message)
      setMessage(err.response?.data?.error || 'Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        placeholder="Name"
        value={formData.name}
        required
        className="p-2 border border-gray-300 rounded"
      />
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
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Sign Up</button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default SignUpForm
