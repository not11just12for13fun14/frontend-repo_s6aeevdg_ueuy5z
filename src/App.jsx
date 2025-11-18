import { useState } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p._id === product._id)
      if (existing) {
        return prev.map((p) => (p._id === product._id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p._id !== id))
  }

  const checkout = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const items = cart.map((c) => ({ product_id: c._id, quantity: c.qty }))
    const total = cart.reduce((sum, it) => sum + it.price * it.qty, 0)
    const demoCustomer = {
      customer_name: 'Bee Lover',
      customer_email: 'customer@example.com',
      customer_address: '123 Honeycomb Lane',
      notes: 'Handle with care',
      items,
      total,
    }
    try {
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(demoCustomer),
      })
      if (!res.ok) throw new Error('Checkout failed')
      const data = await res.json()
      alert(`Order placed! ID: ${data.id}`)
      setCart([])
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur bg-amber-50/70 ring-1 ring-amber-200/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold text-amber-900">BeeMart</a>
          <nav className="text-amber-800/90 flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#learn" className="hover:underline">Learn</a>
            <a href="/test" className="hover:underline">System</a>
          </nav>
        </div>
      </header>

      <Hero />

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <section className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          <ProductGrid onAdd={addToCart} />
          <Cart items={cart} onCheckout={checkout} onRemove={removeFromCart} />
        </section>

        <section id="learn" className="mt-24 bg-white rounded-2xl shadow ring-1 ring-amber-200/60 p-8">
          <h2 className="text-2xl font-bold text-amber-900">Responsible Bee Purchasing</h2>
          <ul className="mt-4 list-disc pl-6 text-amber-800/90 space-y-2 text-sm">
            <li>Always check local regulations for keeping bees in your area.</li>
            <li>Source from ethical breeders and avoid transporting invasive species.</li>
            <li>Provide proper housing, water, and seasonal care.</li>
            <li>Consider local pollinator-friendly plants to support healthy forage.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-amber-900 text-amber-100 py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BeeMart. All rights reserved.</p>
          <p className="text-amber-200/80">Be kind to pollinators ♡</p>
        </div>
      </footer>
    </div>
  )
}

export default App
