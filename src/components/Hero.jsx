export default function Hero() {
  return (
    <section className="relative">
      <div className="aspect-[16/5] bg-gradient-to-r from-[#232f3e] via-[#232f3e] to-[#131921]">
        <img
          src="https://images.unsplash.com/photo-1512446816042-444d641267ee?q=80&w=1920&auto=format&fit=crop"
          alt="Banner"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3].map((i)=> (
            <div key={i} className="bg-white rounded-md shadow p-4">
              <h3 className="font-semibold mb-2">Shop deals for {i === 1 ? 'Electronics' : i === 2 ? 'Home' : 'Fashion'}</h3>
              <div className="grid grid-cols-2 gap-2">
                {[1,2,3,4].map((j)=> (
                  <div key={j} className="bg-gray-100 aspect-square rounded" />
                ))}
              </div>
              <a href="#" className="text-[#007185] text-sm mt-3 inline-block">See more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
