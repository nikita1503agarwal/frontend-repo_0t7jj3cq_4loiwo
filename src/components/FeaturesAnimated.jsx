import { motion } from 'framer-motion'
import { ShieldCheck, Truck, BadgePercent, HandCoins } from 'lucide-react'

const items = [
  { icon: ShieldCheck, title: '100% Original Brands' },
  { icon: BadgePercent, title: 'Overstock Discounts 20%–70%' },
  { icon: Truck, title: 'Next-Day Delivery UAE' },
  { icon: HandCoins, title: 'Cash on Delivery Available' },
]

export default function FeaturesAnimated(){
  return (
    <section className="relative py-16 bg-gradient-to-b from-black to-[#031618] text-teal-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i)=> {
            const Icon = it.icon
            return (
              <motion.div key={i} initial={{opacity:0, y:24}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.3}} transition={{duration:0.5, delay:i*0.05}}
                className="group rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur hover:bg-white/8 hover:border-teal-400/30 transition">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-teal-400/10 text-teal-300 group-hover:text-teal-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">{it.title}</h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
