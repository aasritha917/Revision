export default function Hero() {
  return (
    <section className="container-px mx-auto pt-12 sm:pt-16 lg:pt-24">
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="text-center lg:text-left">
          <p className="eyebrow">iPhone</p>
          <h1 className="headline mt-3">iPhone 15 Pro</h1>
          <p className="mt-4 text-lg text-silver/80 max-w-xl mx-auto lg:mx-0">
            Titanium. A17 Pro chip. USB‑C. A camera that’s a total pro.
            Built for speed, power and breathtaking detail.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" className="inline-flex items-center justify-center rounded-2xl bg-white text-night px-6 py-3 font-medium shadow-soft-2xl">
              Learn more
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/10">
              Buy
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-sky-500/20 to-indigo-500/10 blur-3xl rounded-3xl"></div>
          <img src="/hero-device.svg" alt="iPhone 15 Pro" className="relative w-full max-w-[540px] mx-auto" />
        </div>
      </div>
    </section>
  )
}