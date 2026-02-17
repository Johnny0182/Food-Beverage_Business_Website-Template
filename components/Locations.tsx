export default function Locations() {
  return (
    <section id="locations" className="border-b border-[#242424] px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">Locations</p>
          <h2 className="mt-4 font-[family-name:var(--font-gothic)] text-4xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-5xl">
            FIND US IN THE SHADOWS.
          </h2>

          <div className="mt-8 space-y-8 text-[#cfccc5]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f8b84]">Address</p>
              <p className="mt-2 leading-relaxed">
                1500 Bright Way <br />
                South Gate, CA 90280
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#8f8b84]">Hours</p>
              <p className="mt-2 leading-relaxed">
                Mon–Thu: 7AM–11PM <br />
                Fri–Sat: 7AM–1AM <br />
                Sun: 8AM–9PM
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-disabled="true"
            className="mt-10 cursor-not-allowed border border-[#5d5a54] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#f3f1ed]"
          >
            Get Directions
          </button>
        </div>

        <div className="relative min-h-[320px] overflow-hidden border border-[#2d2d2d] bg-gradient-to-br from-[#111] to-[#161616] p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_45%),radial-gradient(circle_at_75%_70%,rgba(255,255,255,0.06),transparent_50%)]" />
          <div className="relative flex h-full items-center justify-center border border-dashed border-[#3d3d3d]">
            <p className="text-center text-xs uppercase tracking-[0.25em] text-[#9d9992]">
              Stylized map placeholder
              <br />
              South Gate district footprint
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
