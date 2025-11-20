import { motion } from 'framer-motion'

export default function NightCourt(){
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#031014] to-black text-teal-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(800px 200px at 50% 0%, rgba(0,255,240,.08), transparent 60%)'}} />
        <div className="absolute inset-0" style={{backgroundImage:'linear-gradient(90deg, rgba(0,194,178,.06) 1px, transparent 1px), linear-gradient(180deg, rgba(0,194,178,.06) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-200 to-emerald-400 bg-clip-text text-transparent">Why Choose Padel Overstock UAE?</h3>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {["Lowest Prices in UAE","Authentic Gear Only","Local WhatsApp Support","7-Day Easy Returns"].map((t,i)=> (
            <motion.div key={t} initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.45, delay:i*0.05}}
              className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(0,255,240,.6)]" />
                <p className="font-medium">{t}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
