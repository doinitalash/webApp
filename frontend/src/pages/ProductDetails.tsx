import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Product {
  _id: string
  name: string
  type: string
  price: number
  stock: number
  description: string
  image?: string
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    axios.get(`/api/products/${id}`).then(({ data }) => setProduct(data))
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <div className="container mx-auto p-6">
      <img
        src={product.image || 'https://via.placeholder.com/300'}
        alt={product.name}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-400 mt-2">{product.description}</p>
      <p className="text-yellow-400 font-bold mt-2">${product.price}</p>
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4"
        onClick={() => alert('Add to cart functionality coming soon!')}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails
