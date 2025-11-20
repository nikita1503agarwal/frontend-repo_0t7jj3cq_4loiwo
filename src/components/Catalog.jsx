import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function Catalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="catalog" className="relative py-16 bg-gradient-to-b from-[#C08A6F] via-[#BDA58A]/40 to-[#F5E9DC]">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B2F2F]">Featured Rackets</h2>
            <p className="text-[#6B4F3A]/70 mt-1">Curated selection under five products — perfect matches for UAE courts</p>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-[#6B4F3A]">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
