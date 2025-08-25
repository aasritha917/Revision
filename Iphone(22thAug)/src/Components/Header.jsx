export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-night/70 border-b border-white/5">
      <nav className="container-px mx-auto flex items-center justify-between h-14">
        <div className="flex items-center gap-3">
          <img src="/apple-icon.svg" alt="Apple" className="h-5 w-5 opacity-80" />
          <span className="sr-only">Apple</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-silver/80">
          <li className="hover:text-white transition-colors"><a href="#" aria-label="Store">Store</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="Mac">Mac</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="iPad">iPad</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="iPhone">iPhone</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="Watch">Watch</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="AirPods">AirPods</a></li>
          <li className="hover:text-white transition-colors"><a href="#" aria-label="Support">Support</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="text-sm text-silver/80 hover:text-white">Search</button>
          <button className="text-sm text-silver/80 hover:text-white">Bag</button>
        </div>
      </nav>
    </header>
  )
}