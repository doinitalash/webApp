import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../services/axiosConfig'
import setAuthToken from '../services/setAuthToken'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<{ message: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate() // React Router's hook for navigation

  const handleLogout = () => {
    localStorage.removeItem('token') // Remove token from localStorage
    setAuthToken(null) // Remove token from Axios headers
    navigate('/login')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get<{ message: string }>('/protected') // Attempt to fetch protected data
        setData(res.data)
      } catch (err: any) {
        console.error(err)
        if (err.response && err.response.status === 401) {
          // Redirect to login if unauthorized
          navigate('/login')
        } else {
          setError('Failed to fetch protected data')
        }
      }
    }

    fetchData()
  }, [navigate])

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {data ? (<p>{data.message}</p>) : error ? (<p style={{ color: 'red' }}>{error}</p>) : (<p>Loading...</p>)}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
