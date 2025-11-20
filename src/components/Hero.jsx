import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#E7D8C9] via-[#E0C097] to-[#C08A6F]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-10 -top-10 w-72 h-72 bg-[#B8860B]/20 rounded-full blur-3xl" />
        <div className="absolute right-0 top-20 w-96 h-96 bg-[#8B5E3C]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#8B5E3C]/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-block px-4 py-2 rounded-full bg-white/60 text-[#6B4F3A] text-sm font-medium backdrop-blur"
        >
          Premium Padel Gear • UAE
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-[#3B2F2F]"
        >
          Elevate Your Game
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-[#4F3D2F]/80 max-w-2xl mx-auto"
        >
          Hand-picked rackets tuned for Middle Eastern play — crafted aesthetics, desert tones, and fast delivery across UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#catalog" className="px-6 py-3 rounded-xl bg-[#8B5E3C] text-white font-semibold shadow-lg shadow-[#8B5E3C]/30 hover:bg-[#70492F] transition">Shop Rackets</a>
          <a href="#contact" className="px-6 py-3 rounded-xl bg-white/70 text-[#6B4F3A] font-semibold shadow hover:bg-white transition">WhatsApp Us</a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-6 text-center text-[#3B2F2F]/60 text-sm">
        Dubai • Abu Dhabi • Sharjah • Nationwide Delivery
      </div>
    </section>
  )
}
