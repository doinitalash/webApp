import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import authenticateToken from './middleware/authMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/dlashart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use(cors())

// Example of a protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is protected data', user: req.user })
})


// Dummy products route
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Lash Adhesive', price: 25 },
    { id: 2, name: 'Growth Serum', price: 35 },
    { id: 3, name: 'Reusable Lash Set', price: 45 },
  ])
})

// Start server
const PORT = 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
