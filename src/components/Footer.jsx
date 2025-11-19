export default function Footer(){
  return (
    <footer className="bg-[#232f3e] text-gray-200 mt-8">
      <div className="text-center text-sm py-3 bg-[#37475a]"><a href="#" className="hover:underline">Back to top</a></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Get to Know Us</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Make Money with Us</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Sell products</a></li>
            <li><a href="#" className="hover:underline">Affiliate</a></li>
            <li><a href="#" className="hover:underline">Advertise</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Payment Products</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Cards</a></li>
            <li><a href="#" className="hover:underline">Business Card</a></li>
            <li><a href="#" className="hover:underline">Shop with Points</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Let Us Help You</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Shipping Rates</a></li>
            <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-6 border-t border-white/10">© {new Date().getFullYear()} amazin.shop — Demo UI</div>
    </footer>
  )
}
