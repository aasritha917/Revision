import { specs } from '../data/specs'

export default function Specs() {
  return (
    <section className="container-px mx-auto">
      <div className="rounded-3xl border border-white/5 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500/10 to-sky-500/10 p-8 lg:p-10">
          <h2 className="headline text-center">Tech Specs</h2>
          <p className="text-center text-silver/80 mt-2">A quick look at what's inside.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {specs.map((s, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-graphite/40">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-silver/80">
                {s.items.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}