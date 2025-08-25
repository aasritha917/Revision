const Item = ({ title, desc }) => (
  <div className="rounded-3xl bg-graphite/60 border border-white/5 p-6">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-silver/80">{desc}</p>
  </div>
)

export default function Highlights() {
  return (
    <section className="container-px mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="eyebrow">Highlights</p>
        <h2 className="headline mt-3">Big upgrades. Stunning details.</h2>
        <p className="mt-4 text-silver/80">
          An ultra‑powerful chip and a pro camera system. Designed to be durable, light and fast.
        </p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Item title="Titanium build" desc="Light. Tough. Beautiful new finish." />
        <Item title="A17 Pro chip" desc="Next‑level GPU for gaming and graphics." />
        <Item title="Pro camera system" desc="3× optical zoom. Night mode. 4K60 ProRes." />
        <Item title="USB‑C" desc="Fast charging. Versatile connectivity." />
      </div>
    </section>
  )
}