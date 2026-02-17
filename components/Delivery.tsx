const providers = ['DoorDash', 'Uber Eats', 'Postmates', 'In-House Courier'];

export default function Delivery() {
  return (
    <section id="delivery" className="border-b border-[#242424] px-6 py-24">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#8f8b84]">Delivery</p>
        <h2 className="mt-4 font-[family-name:var(--font-gothic)] text-4xl uppercase tracking-[0.08em] text-[#f5f3f0] sm:text-5xl">
          DELIVERY AFTER DARK.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider) => (
            <article
              key={provider}
              className="flex min-h-[200px] flex-col justify-between border border-[#2d2d2d] bg-[#0d0d0d] p-6"
            >
              <h3 className="font-[family-name:var(--font-gothic)] text-2xl uppercase tracking-[0.08em] text-[#f3f1ed]">
                {provider}
              </h3>
              <button
                type="button"
                aria-disabled="true"
                className="mt-8 cursor-not-allowed border border-[#5d5a54] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#d7d4ce]"
              >
                Order Now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
