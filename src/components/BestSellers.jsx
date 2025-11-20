import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Card({ p }){
  return (
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5}}
      className="group relative rounded-2xl bg-gradient-to-b from-[#0f1516] to-black border border-white/10 overflow-hidden shadow-[0_0_40px_-10px_rgba(0,255,240,0.25)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background:'radial-gradient(800px 120px at var(--mx,50%) 0%, rgba(0,255,240,.08), transparent 60%)'}} />
      <div className="aspect-[4/5] overflow-hidden">
        <img src={p.images?.[0] || '/placeholder.png'} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-teal-100">
          <h4 className="font-semibold text-sm md:text-base">{p.brand} {p.name}</h4>
          <span className="font-bold text-amber-300">AED {Math.round(p.price_aed)}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-wide">
          {p.featured && <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">New</span>}
          <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-400/20">Clearance</span>
          <span className="px-2 py-1 rounded bg-rose-500/10 text-rose-300 border border-rose-400/20">Limited Stock</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function BestSellers(){
  const [items, setItems] = useState([])
  useEffect(()=>{
    const load = async () => {
      try{
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/api/products?featured=true`)
        const data = await res.json()
        setItems(data)
      }catch(e){
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="bestsellers" className="relative py-16 bg-gradient-to-b from-[#031618] to-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">Best Sellers</h3>
            <p className="text-teal-100/70 mt-1">Top-rated rackets our UAE customers love</p>
          </div>
          <a href="#deals" className="text-teal-300 hover:text-teal-200">Shop all deals →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(p => <Card key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  )
}
