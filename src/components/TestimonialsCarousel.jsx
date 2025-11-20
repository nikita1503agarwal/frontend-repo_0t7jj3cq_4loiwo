import { useEffect, useRef } from 'react'

const testimonials = [
  { name: 'Omar A.', text: 'Unbeatable prices and fast delivery to Dubai Marina. My new racket feels amazing.' },
  { name: 'Lina K.', text: 'WhatsApp support was instant. Got my size right and delivered next day.' },
  { name: 'Khalid S.', text: 'Legit gear, good discounts. Will order grips and shoes next.' },
]

export default function TestimonialsCarousel(){
  const trackRef = useRef(null)

  useEffect(()=>{
    const el = trackRef.current
    if(!el) return
    let pos = 0
    let raf
    const speed = 0.5
    const step = () => {
      pos -= speed
      if (Math.abs(pos) > el.scrollWidth/2) pos = 0
      el.style.transform = `translateX(${pos}px)`
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative py-16 bg-[#050909] text-teal-100 overflow-hidden">
      <div className="absolute inset-0" style={{background:'radial-gradient(800px 200px at 50% 100%, rgba(0,255,240,.06), transparent 60%)'}} />
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">Customers Love Us</h3>
        <div className="relative">
          <div className="overflow-hidden">
            <div ref={trackRef} className="flex gap-6 will-change-transform">
              {[...testimonials, ...testimonials, ...testimonials].map((t, i)=> (
                <div key={i} className="shrink-0 w-[280px] rounded-3xl p-5 bg-white/5 border border-white/10 backdrop-blur relative">
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-[0_0_20px_rgba(0,255,240,.4)]" />
                  <p className="text-sm text-teal-100/80">“{t.text}”</p>
                  <p className="mt-4 text-xs text-teal-300">— {t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
