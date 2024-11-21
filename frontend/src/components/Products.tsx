import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import { Product, FrontendProduct } from '../types';

const Products: React.FC = () => {
  const [products, setProducts] = useState<FrontendProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<FrontendProduct | null>(null); // Add state for selected product

  useEffect(() => {
    fetchProducts().then(({ data }: { data: Product[] }) => {
      const formattedData = data.map((item) => ({
        id: item._id, // Map MongoDB's _id to id
        name: item.name,
        type: item.type,
        price: item.price,
        stock: item.stock,
        description: item.description,
        image: item.image,
        category: item.category,
      }));
      setProducts(formattedData);
    });
  }, []);

  // Open modal and set selected product
  const openModal = (product: FrontendProduct) => {
    setSelectedProduct(product);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-8 px-4 bg-gray-900">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-white">{product.name}</h3>
            <p className="text-yellow-400 font-semibold">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
              onClick={() => openModal(product)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <button
              className="text-red-500 float-right"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={selectedProduct.image || 'https://via.placeholder.com/300'}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-yellow-500 font-bold text-lg mb-4">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
