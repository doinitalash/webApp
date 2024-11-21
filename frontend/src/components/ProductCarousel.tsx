import { useEffect, useState } from 'react'
import { API } from '../services/api'

interface Product {
  id: string
  name: string
  image?: string
  price: number
}

const ProductCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await API.get<Product[]>('/products')
      setProducts(data)
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [products])

  if (products.length === 0) return null

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full flex-shrink-0 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-bold mt-4 text-white">{product.name}</h3>
            <p className="text-yellow-400 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
