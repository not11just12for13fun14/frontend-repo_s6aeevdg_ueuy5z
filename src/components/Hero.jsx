import { useEffect, useState } from 'react'

export default function Hero() {
  const [seeded, setSeeded] = useState(false)

  useEffect(() => {
    // Try to seed products silently on first load
    const run = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/seed`, { method: 'POST' })
        if (res.ok) setSeeded(true)
      } catch (e) {
        // ignore
      }
    }
    run()
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#fde68a_0,transparent_40%),radial-gradient(circle_at_80%_30%,#fbbf24_0,transparent_35%),radial-gradient(circle_at_50%_80%,#f59e0b_0,transparent_35%)]" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium ring-1 ring-amber-300/60">
              🐝 Fresh for Spring 2025
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-amber-900">
              Buy Healthy, Happy Bees
            </h1>
            <p className="mt-4 text-lg text-amber-800/90">
              Nucs, packages, queens, and colonies sourced from trusted breeders. Shipped with care. Perfect for beginners and pros.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#shop" className="px-5 py-3 rounded-lg bg-amber-600 text-white font-semibold shadow hover:bg-amber-700 transition">Shop Bees</a>
              <a href="#learn" className="px-5 py-3 rounded-lg bg-white text-amber-800 font-semibold shadow ring-1 ring-amber-300/60 hover:bg-amber-50 transition">Learn More</a>
            </div>
            {seeded && (
              <p className="mt-3 text-xs text-amber-700/80">Seeded demo products.</p>
            )}
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop"
              alt="Beekeeper with bees"
              className="rounded-2xl shadow-2xl ring-1 ring-amber-200/60"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow ring-1 ring-amber-200/60">
              <p className="text-sm font-semibold text-amber-800">Live arrival guaranteed</p>
              <p className="text-xs text-amber-700">Care guide included</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
