import { useState } from 'react'
import { Search, ShoppingCart, MapPin, ChevronDown, Menu } from 'lucide-react'

export default function Header({ cartCount = 0, onMenu }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const url = `${base}/api/products?q=${encodeURIComponent(query)}`
    window.dispatchEvent(new CustomEvent('search-products', { detail: { url, q: query } }))
  }

  return (
    <header className="bg-[#131921] text-white">
      {/* Top strip */}
      <div className="flex items-center gap-4 px-4 sm:px-6 py-2">
        <button className="p-2 rounded hover:bg-white/10 lg:hidden" onClick={onMenu} aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
        <a href="/" className="flex items-end gap-1">
          <div className="text-2xl font-black tracking-tight">amazin</div>
          <span className="text-xs text-yellow-400 -mb-0.5">.shop</span>
        </a>

        {/* Deliver to */}
        <div className="hidden sm:flex items-center gap-1 ml-2 text-sm text-gray-200">
          <MapPin className="w-4 h-4 text-gray-300" />
          <span className="text-gray-300">Deliver to</span>
          <span className="font-semibold">Your location</span>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 hidden md:flex items-stretch max-w-3xl mx-4">
          <div className="flex items-center bg-white rounded-l-md overflow-hidden">
            <button type="button" className="px-3 py-2 text-sm text-gray-700 bg-gray-100 border-r border-gray-200 hidden sm:flex items-center gap-1">
              All
              <ChevronDown className="w-4 h-4" />
            </button>
            <input
              className="flex-1 px-3 py-2 outline-none text-gray-900"
              placeholder="Search products"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="px-4 bg-[#febd69] text-gray-900 rounded-r-md hover:bg-[#f3a847]">
            <Search className="w-5 h-5" />
          </button>
        </form>

        {/* Account & Cart */}
        <div className="ml-auto flex items-center gap-4 text-sm">
          <div className="hidden lg:block leading-tight">
            <div className="text-gray-300">Hello, sign in</div>
            <div className="font-semibold flex items-center gap-1">Account & Lists <ChevronDown className="w-4 h-4"/></div>
          </div>
          <div className="hidden md:block leading-tight">
            <div className="text-gray-300">Returns</div>
            <div className="font-semibold">& Orders</div>
          </div>
          <a href="#cart" className="relative flex items-center">
            <ShoppingCart className="w-7 h-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#f08804] text-black font-bold text-xs rounded-full w-5 h-5 grid place-items-center">
                {cartCount}
              </span>
            )}
            <span className="ml-1 hidden md:block font-semibold">Cart</span>
          </a>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-[#232f3e] text-sm px-4 sm:px-6 py-2 flex items-center gap-4 overflow-x-auto">
        <button className="flex items-center gap-2 font-semibold">
          <Menu className="w-5 h-5" />
          All
        </button>
        <a className="hover:underline whitespace-nowrap" href="#">Today's Deals</a>
        <a className="hover:underline whitespace-nowrap" href="#">Customer Service</a>
        <a className="hover:underline whitespace-nowrap" href="#">Registry</a>
        <a className="hover:underline whitespace-nowrap" href="#">Gift Cards</a>
        <a className="hover:underline whitespace-nowrap" href="#">Sell</a>
      </div>
    </header>
  )
}
