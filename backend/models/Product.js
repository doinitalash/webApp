import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String }, // For product image URLs
  category: { type: String }, // Optional for categories like "twizzers" or "lashes"
})

export default mongoose.model('Product', productSchema)
