import { ShoppingCart, Bee, Menu } from 'lucide-react'

function Navbar({ cartCount, onCartClick }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-400/20 ring-1 ring-amber-300/30">
            <Bee className="w-6 h-6 text-amber-300" />
          </div>
          <div className="">
            <p className="text-xl font-bold text-white">Bee Bazaar</p>
            <p className="text-xs text-amber-200/70 -mt-1">Sweet deals, gentle bees</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-400/10 hover:bg-amber-400/20 ring-1 ring-amber-300/30 text-amber-100 transition"
            onClick={onCartClick}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-400 text-slate-900 text-xs font-bold rounded-full h-5 w-5 grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
          <button className="p-2 rounded-md hover:bg-white/5 text-white/70 sm:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
