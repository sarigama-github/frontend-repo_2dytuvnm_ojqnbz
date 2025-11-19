import { Star } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-md shadow hover:shadow-lg transition overflow-hidden">
      <div className="aspect-[4/3] bg-gray-50">
        {product.image ? (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center text-gray-400">No Image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-2 min-h-[2.75rem]">{product.title}</h3>
        {product.rating && (
          <div className="flex items-center gap-1 text-yellow-500 my-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-400' : ''}`} />
            ))}
            <span className="ml-1 text-xs text-gray-600">{product.rating.toFixed(1)}</span>
          </div>
        )}
        <div className="text-xl font-bold mt-1">${product.price?.toFixed?.(2) ?? product.price}</div>
        <button onClick={()=>onAdd(product)} className="mt-3 w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
