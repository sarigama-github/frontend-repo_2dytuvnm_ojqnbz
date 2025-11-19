import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchProducts = async (url) => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch(url)
      if (!res.ok) throw new Error('Failed to load products')
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetchProducts(`${base}/api/products`)

    const handler = (e) => {
      fetchProducts(e.detail.url)
    }
    window.addEventListener('search-products', handler)
    return () => window.removeEventListener('search-products', handler)
  }, [])

  if (loading) return <div className="p-6 text-center">Loading products...</div>
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-xl font-semibold mb-4">Top picks for you</h2>
      <div className="grid gap-4" style={{gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))'}}>
        {items.map((p, idx) => (
          <ProductCard key={idx} product={p} onAdd={() => {}} />
        ))}
      </div>
    </section>
  )
}
