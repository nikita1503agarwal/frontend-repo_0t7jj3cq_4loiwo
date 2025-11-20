import { PhoneCall, MessageCircle, CreditCard, Wallet } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-teal-100 border-t border-white/10">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="font-extrabold text-xl bg-gradient-to-r from-teal-200 to-emerald-400 bg-clip-text text-transparent">Padel Overstock UAE</h4>
          <p className="text-sm mt-3 text-teal-100/70">Premium padel gear at overstock prices. Next-day delivery across the UAE.</p>
        </div>
        <div>
          <h4 className="font-semibold text-teal-200">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-teal-100/70">
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-teal-200">Payments</h4>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><CreditCard className="w-4 h-4" /> Visa</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><CreditCard className="w-4 h-4" /> Mastercard</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><Wallet className="w-4 h-4" /> COD</span>
          </div>
        </div>
        <div id="contact">
          <h4 className="font-semibold text-teal-200">Contact</h4>
          <p className="text-sm mt-3 text-teal-100/70 flex items-center gap-2"><PhoneCall className="w-4 h-4" /> +971 50 000 0000</p>
          <a href="https://wa.me/971500000000" className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(0,255,240,.4)] animate-pulse">
            <MessageCircle className="w-4 h-4" /> WhatsApp Chat
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-teal-100/60">© {new Date().getFullYear()} Padel Overstock UAE — All rights reserved.</div>
    </footer>
  )
}
