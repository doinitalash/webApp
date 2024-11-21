import axios from 'axios'

// Create an Axios instance with the base URL
export const API = axios.create({
  baseURL: 'http://localhost:5000',
});

// Define the structure of the response data
interface Product {
  _id: string
  name: string
  type: string
  price: number
  stock: number
  description: string
  image?: string
  category?: string
}

interface Testimonial {
  _id: string
  name: string
  feedback: string
}


// Define typed functions to fetch data
export const fetchProducts = (): Promise<{ data: Product[] }> => API.get('/products')
export const fetchTestimonials = (): Promise<{ data: Testimonial[] }> => API.get('/testimonials')
