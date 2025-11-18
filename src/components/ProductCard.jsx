export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow ring-1 ring-amber-200/60 overflow-hidden flex flex-col">
      {product.image && (
        <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-amber-900">{product.name}</h3>
        <p className="text-sm text-amber-800/80">{product.species}</p>
        <p className="mt-2 text-sm text-amber-700/90 line-clamp-3">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-lg font-bold text-amber-900">${product.price.toFixed(2)}</span>
          <button
            disabled={!product.in_stock}
            onClick={() => onAdd(product)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${product.in_stock ? 'bg-amber-600 text-white hover:bg-amber-700' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            {product.in_stock ? 'Add to cart' : 'Out of stock'}
          </button>
        </div>
      </div>
    </div>
  )
}
