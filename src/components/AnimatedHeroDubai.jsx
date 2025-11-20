import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedHeroDubai() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const skylineY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const racketY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const racketRotate = useTransform(scrollYProgress, [0,1], [0, 10])

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rX = useSpring(useTransform(my, [-50,50], [8,-8]), { stiffness: 120, damping: 15 })
  const rY = useSpring(useTransform(mx, [-50,50], [-12,12]), { stiffness: 120, damping: 15 })

  useEffect(() => {
    const handle = (e) => {
      const centerX = window.innerWidth/2
      const centerY = window.innerHeight/2
      mx.set(e.clientX - centerX)
      my.set(e.clientY - centerY)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [mx, my])

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Parallax background dunes */}
      <motion.div style={{ y: bgY }} aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001013] via-[#001a1f] to-black" />
        {/* desert gradient layer */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1f22] to-transparent" />
        {/* drifting sand particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <span key={i} className="absolute w-1 h-1 rounded-full bg-teal-300/20" style={{
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              filter: 'blur(0.5px)',
              animation: `floaty ${6+Math.random()*6}s linear ${Math.random()*4}s infinite`
            }} />
          ))}
        </div>
      </motion.div>

      {/* Dubai skyline silhouette */}
      <motion.svg style={{ y: skylineY }} className="absolute bottom-0 left-0 right-0 w-[140%] max-w-none text-[#00c2b2]/10" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#08fff1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#08fff1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,260 L60,260 L80,180 L90,180 L95,120 L100,260 L130,260 L150,200 L160,200 L165,140 L170,260 L210,260 L230,160 L235,90 L240,260 L300,260 L320,210 L330,210 L345,150 L350,260 L420,260 L440,180 L445,120 L450,260 L520,260 L540,160 L560,110 L565,60 L570,260 L650,260 L670,200 L680,140 L685,60 L690,260 L760,260 L790,180 L800,260 L860,260 L880,210 L900,260 L960,260 L980,230 L1000,260 L1200,260 L1200,300 L0,300 Z" fill="url(#glow)" />
      </motion.svg>

      {/* Floating premium racket placeholder */}
      <motion.div style={{ y: racketY, rotateX: rX, rotateY: rY, rotate: racketRotate }}
        className="relative z-10 w-[320px] h-[420px] md:w-[420px] md:h-[540px]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#0ef] via-[#009d8f] to-[#003c38] shadow-[0_0_80px_-10px_rgba(0,255,240,0.35)]" />
        <div className="absolute inset-[8px] rounded-[30px] bg-gradient-to-br from-[#0d0d0d] to-[#141414]" />
        {/* strings pattern */}
        <div className="absolute inset-[32px] rounded-[24px] overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20px 20px, #0ef 1px, transparent 1px)', backgroundSize:'28px 28px'}} />
        </div>
        {/* padel holes */}
        <div className="absolute inset-[32px] grid grid-cols-6 gap-4 opacity-50">
          {Array.from({length:24}).map((_,i)=> (
            <span key={i} className="w-2 h-2 rounded-full bg-[#00fff5]/30 place-self-center" />
          ))}
        </div>
        {/* lens flare */}
        <div className="absolute -top-8 -left-6 w-40 h-40 bg-teal-300/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-8 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Copy + CTAs */}
      <div className="absolute inset-x-0 top-[12vh] md:top-[16vh] z-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
            className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-teal-200 to-teal-500 text-transparent bg-clip-text">
            Premium Padel Gear • UAE Overstock Prices
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.9, delay:0.05}}
            className="mt-4 text-base md:text-xl text-teal-100/80">
            Elite brands, clearance deals, next-day delivery across the UAE.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.9, delay:0.1}} className="mt-8 flex items-center justify-center gap-4">
            <a href="#deals" className="px-6 py-3 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 text-black font-semibold shadow-lg shadow-teal-400/30 hover:brightness-110 transition">Shop Best Deals</a>
            <a href="#bestsellers" className="px-6 py-3 rounded-xl bg-white/10 text-teal-100 font-semibold backdrop-blur hover:bg-white/15 border border-white/10 transition">Browse Rackets</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes floaty { from { transform: translateY(0); } to { transform: translateY(-40px);} }
      `}</style>
    </section>
  )
}
