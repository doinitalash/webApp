import express from 'express'
import product from '../models/Product.js'

const router = express.Router()

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products.map((prodcut) => ({
        _id: product._id,
        name: product.name,
        type: product.type,
        price: product.price,
        stock: product.stock,
        description: product.description,
        image: product.image,
        category: product.category,
    })))
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' })
  }
})

// Add a new product
router.post('/', async (req, res) => {
  const { name, type, price, stock, description, image, category } = req.body
  try {
    const newProduct = new Product({ name, type, price, stock, description, image, category })
    await newProduct.save()
    res.status(201).json({ message: 'Product added successfully' })
  } catch (error) {
    res.status(400).json({ error: 'Failed to add product' })
  }
})

export default router
