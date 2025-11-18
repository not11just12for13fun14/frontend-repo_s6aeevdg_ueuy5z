export default function Cart({ items, onCheckout, onRemove }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <aside className="bg-white rounded-2xl shadow ring-1 ring-amber-200/60 p-6 sticky top-6">
      <h3 className="text-xl font-bold text-amber-900">Your Cart</h3>
      {items.length === 0 ? (
        <p className="mt-2 text-amber-700">No bees yet. Add a few! 🐝</p>
      ) : (
        <div className="mt-4 space-y-3">
          {items.map((it) => (
            <div key={it._id} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-amber-900">{it.name}</p>
                <p className="text-amber-700/80">x{it.qty} • ${(it.price * it.qty).toFixed(2)}</p>
              </div>
              <button onClick={() => onRemove(it._id)} className="text-red-600 hover:underline">Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold text-amber-900">Total</span>
        <span className="text-lg font-bold text-amber-900">${total.toFixed(2)}</span>
      </div>
      <button
        disabled={items.length === 0}
        onClick={onCheckout}
        className={`mt-4 w-full px-4 py-3 rounded-lg font-semibold transition ${items.length === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
      >
        Checkout
      </button>
    </aside>
  )
}
