export default function Footer() {
  return (
    <footer className="bg-[#3B2F2F] text-[#F5E9DC]">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-bold text-lg">Padel Desert</h4>
          <p className="text-sm mt-2 text-[#F5E9DC]/80">Premium padel rackets curated for the Middle East. Nationwide delivery across UAE.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Support</h4>
          <ul className="mt-2 space-y-1 text-sm text-[#F5E9DC]/80">
            <li>Shipping & Delivery</li>
            <li>Returns</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="font-bold text-lg">Contact</h4>
          <p className="text-sm mt-2 text-[#F5E9DC]/80">WhatsApp: +971 50 000 0000</p>
          <a href="https://wa.me/971500000000" className="inline-block mt-3 px-4 py-2 rounded-lg bg-[#E0C097] text-[#3B2F2F] font-semibold hover:bg-[#d5b689]">Chat on WhatsApp</a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#F5E9DC]/60">© {new Date().getFullYear()} Padel Desert — All rights reserved.</div>
    </footer>
  )
}
