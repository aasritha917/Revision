export default function CTA() {
  return (
    <section className="container-px mx-auto">
      <div className="rounded-3xl border border-white/5 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-sky-500/30 blur-3xl" />
          <div className="relative p-8 lg:p-12 text-center">
            <h2 className="headline">Switch to iPhone</h2>
            <p className="mt-3 text-silver/80 max-w-2xl mx-auto">
              It’s easy to move from Android to iPhone. Keep your photos, contacts and more. Experience the performance and privacy of iPhone.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a href="#" className="link">Learn how</a>
              <a href="#" className="link">Explore iOS</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}