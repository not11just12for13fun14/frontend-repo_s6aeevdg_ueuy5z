import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data.products || [])
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-amber-800">Loading bees...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <div id="shop" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard key={p._id} product={p} onAdd={onAdd} />)
      )}
    </div>
  )
}
