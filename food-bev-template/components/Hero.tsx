export default function Hero() {
  return (
    <section id="hero" className="grain-overlay relative isolate border-b border-[#242424]">
      <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">South Gate, CA 90280</p>
        <h1 className="max-w-4xl font-[family-name:var(--font-gothic)] text-5xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-6xl md:text-7xl">
          COFFEE FOR THE CURSED.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c9c6bf] sm:text-lg">
          Small-batch roasts. Midnight pastries. South Gate after dark.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button
            type="button"
            aria-disabled="true"
            className="cursor-not-allowed border border-[#5d5a54] bg-[#131313] px-7 py-3 text-xs uppercase tracking-[0.22em] text-[#f3f1ed]"
          >
            Order Online
          </button>
          <p className="text-xs uppercase tracking-[0.2em] text-[#9d9992]">(562) 555-0199 • Open Late</p>
        </div>
      </div>
    </section>
  );
}