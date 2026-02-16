const highlights = [
  'Midnight Roasts',
  'Horror Film Nights',
  'House-made Pastries',
  'Limited “Blood Moon” specials',
];

export default function About() {
  return (
    <section id="about" className="border-b border-[#242424] px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">About</p>
          <h2 className="mt-4 font-(family-name:--font-gothic) text-4xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-5xl">
            A LOUNGE BUILT FOR NIGHT OWLS.
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#c9c6bf]">
            Grim Grounds is a gothic-inspired coffee lounge in South Gate, CA 90280 built by horror film
            lovers and design obsessives. Dark interiors, candlelit corners, underground film screenings,
            and small-batch coffee roasted in-house.
          </p>
        </div>

        <ul className="space-y-4 border border-[#2d2d2d] bg-[#0d0d0d] p-8">
          {highlights.map((item) => (
            <li
              key={item}
              className="border-b border-[#262626] pb-3 text-sm uppercase tracking-[0.18em] text-[#d7d4ce] last:border-none"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}