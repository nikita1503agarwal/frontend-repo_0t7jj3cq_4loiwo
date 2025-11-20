export default function ProductCard({ product }) {
  return (
    <div className="group rounded-2xl bg-white/70 backdrop-blur border border-[#BDA58A]/40 hover:border-[#8B5E3C]/40 transition overflow-hidden shadow-sm hover:shadow-md">
      <div className="aspect-square overflow-hidden bg-[#E7D8C9]">
        <img src={product.images?.[0] || '/placeholder.png'} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-[#3B2F2F]">{product.brand} {product.name}</h3>
          <span className="font-bold text-[#8B5E3C]">AED {product.price_aed.toFixed(0)}</span>
        </div>
        {product.balance && (
          <p className="text-xs text-[#6B4F3A]/70 mt-1">Balance: {product.balance}</p>
        )}
        <button className="mt-4 w-full px-4 py-2 rounded-lg bg-[#8B5E3C] text-white font-medium hover:bg-[#70492F] transition">Add to Cart</button>
      </div>
    </div>
  )
}
