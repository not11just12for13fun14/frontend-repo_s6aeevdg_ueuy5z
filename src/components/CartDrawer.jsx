import { X } from 'lucide-react'

function CartDrawer({ open, items, onClose, onCheckout, onQtyChange }) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-slate-900 border-l border-white/10 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-white font-semibold">Your Cart</h2>
          <button onClick={onClose} className="p-2 rounded hover:bg-white/5">
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-slate-300/70">Your cart is empty</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-3">
                <img src={it.image} alt={it.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <p className="text-white font-medium leading-tight">{it.name}</p>
                  <p className="text-slate-300/70 text-sm">${it.price.toFixed(2)}</p>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button className="px-2 py-1 bg-white/5 rounded" onClick={() => onQtyChange(it.id, Math.max(1, it.quantity - 1))}>-</button>
                    <span className="text-white">{it.quantity}</span>
                    <button className="px-2 py-1 bg-white/5 rounded" onClick={() => onQtyChange(it.id, it.quantity + 1)}>+</button>
                  </div>
                </div>
                <div className="text-amber-300 font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-white mb-3">
            <span>Total</span>
            <span className="text-amber-300 font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full py-2 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
