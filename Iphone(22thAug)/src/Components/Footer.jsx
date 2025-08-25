export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5">
      <div className="container-px mx-auto py-10 text-silver/70 text-sm space-y-6">
        <p className="max-w-4xl">
          This page is a learning exercise that recreates the look and feel of a modern iPhone landing page using React and Tailwind CSS. 
          All trademarks and product names are property of their respective owners.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold text-white">Shop and Learn</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#">Store</a></li>
              <li><a className="hover:underline" href="#">Mac</a></li>
              <li><a className="hover:underline" href="#">iPad</a></li>
              <li><a className="hover:underline" href="#">iPhone</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Services</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#">Apple TV+</a></li>
              <li><a className="hover:underline" href="#">iCloud</a></li>
              <li><a className="hover:underline" href="#">Apple Music</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Apple Store</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#">Find a Store</a></li>
              <li><a className="hover:underline" href="#">Financing</a></li>
              <li><a className="hover:underline" href="#">Order Status</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">About</h4>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#">Newsroom</a></li>
              <li><a className="hover:underline" href="#">Investors</a></li>
              <li><a className="hover:underline" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 Example. For education only.</p>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#">Privacy</a>
            <a className="hover:underline" href="#">Terms</a>
            <a className="hover:underline" href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}