const Tile = ({ label, children }) => (
  <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-graphite/60">
    <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
      {children}
    </div>
    <div className="absolute bottom-3 left-4 text-sm bg-black/50 backdrop-blur px-3 py-1.5 rounded-full">{label}</div>
  </div>
)

export default function Gallery() {
  return (
    <section className="container-px mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <Tile label="Natural Titanium">
          <div className="w-full h-full bg-gradient-to-br from-stone-400 to-stone-600" />
        </Tile>
        <Tile label="Blue Titanium">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600" />
        </Tile>
        <Tile label="White Titanium">
          <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-500" />
        </Tile>
        <Tile label="Black Titanium">
          <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900" />
        </Tile>
      </div>
    </section>
  )
}