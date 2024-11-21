// types.ts
export interface Product {
  _id: string // MongoDB's default ID field
  name: string
  type: string
  price: number
  stock: number
  description: string
  image?: string // Optional property
  category?: string // Optional property
}

export interface FrontendProduct {
  id: string
  name: string
  type: string
  price: number
  stock: number
  description: string
  image?: string // Optional property
  category?: string // Optional property
}
