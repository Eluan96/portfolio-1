const Footer = () => (
  <footer className="bg-dark pt-10 pb-10 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-2xl font-bold text-white mb-12 uppercase tracking-tighter italic">BENJAMIN SILIQUE</div>
      
      <div className="flex flex-wrap justify-center gap-8 mb-16 text-muted text-sm font-medium">
        {['Overview', 'Features', 'Pricing', 'Careers', 'Help', 'Privacy'].map((link) => (
          <a key={link} href="#" className="hover:text-white transition">{link}</a>
        ))}
      </div>

      <div className="w-full max-w-md flex gap-2 mb-16">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-1 bg-white px-4 py-3 text-black focus:outline-none"
        />
        <button className="bg-black border border-white text-white px-6 py-3 font-bold hover:bg-white hover:text-black transition">
          Subscribe
        </button>
      </div>

      <div className="w-full border-t border-white/5 pt-8 text-center text-muted text-xs">
        © 2077 Untitled UI. All rights reserved.
      </div>
    </div>
  </footer>
);
export default Footer;