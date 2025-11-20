export default function FinalCTA(){
  return (
    <section id="deals" className="relative py-14 bg-gradient-to-b from-[#031618] to-black text-teal-100 overflow-hidden">
      <div className="absolute inset-0" style={{background:'radial-gradient(1000px 200px at 50% 0%, rgba(0,255,240,.06), transparent 60%)'}} />
      <div className="container mx-auto px-6">
        <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#0e1f21] to-[#0b1314] border border-white/10 shadow-[0_0_40px_-10px_rgba(0,255,240,0.25)] relative overflow-hidden">
          <div className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-teal-400/20 blur-2xl" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-amber-400/10 blur-2xl" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-300 to-teal-300 bg-clip-text text-transparent">Upgrade Your Game — Shop UAE’s Best Padel Deals</h4>
              <p className="text-teal-100/70 mt-1">Premium gear, overstock prices, delivered next day across the UAE.</p>
            </div>
            <a href="#bestsellers" className="px-6 py-3 rounded-xl bg-gradient-to-br from-amber-300 to-amber-400 text-black font-semibold shadow-lg hover:brightness-110">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
