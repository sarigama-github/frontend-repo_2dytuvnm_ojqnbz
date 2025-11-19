import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#e3e6e6]">
      <Header cartCount={cartCount} onMenu={() => {}} />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default App
