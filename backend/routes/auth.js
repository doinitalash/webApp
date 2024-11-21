import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'
import User from '../models/User.js'
import dotenv from 'dotenv'

const router = express.Router()
dotenv.config()

// Register route
router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: 'Invalid data', details: errors.array() })
    }

    const { email, password, name } = req.body
    if (!name) {
      return res.status(400).json({ error: 'Name is required' })
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User({ email, password: hashedPassword, name })
      await user.save()
      res.status(201).json({ message: 'User registered successfully' })
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({ error: 'Email already exists' }) // Handle duplicate email
      }
      console.error('Error during registration:', err)
      res.status(500).json({ error: 'User registration failed' })
    }
  }
)

// Login route
router.post(
  '/login',
  body('email').isEmail(),
  body('password').exists(),
  async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email })
      if (!user) return res.status(400).json({ message: 'Invalid credentials' })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' })

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
      res.status(200).json({ token })
    } catch (err) {
      res.status(500).json({ error: 'Login failed' })
    }
  }
)

export default router
