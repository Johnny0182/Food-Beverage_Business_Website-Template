const navItems = ['About', 'Menu', 'Locations', 'Delivery', 'Contact', 'Login'];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2c2c2c] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-b border-[#1f1f1f] px-6 py-3 text-[0.68rem] uppercase tracking-[0.25em] text-[#b2afa9]">
        <p>SOUTH GATE, CA</p>
        <div className="flex items-center gap-4">
          {/* Integrate authentication here */}
          <button
            type="button"
            aria-disabled="true"
            className="cursor-not-allowed opacity-80"
          >
            LOGIN
          </button>
          <button
            type="button"
            aria-disabled="true"
            className="cursor-not-allowed opacity-80"
          >
            BAG 0
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 lg:flex-row lg:justify-between">
        <a
          href="#hero"
          className="font-[family-name:var(--font-gothic)] text-center text-xl uppercase tracking-[0.28em] text-[#f5f3f0] sm:text-2xl"
        >
          GRIM GROUNDS COFFEE
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-[0.67rem] uppercase tracking-[0.22em] text-[#c9c6bf] sm:gap-4">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const href = ['about', 'menu', 'locations', 'delivery', 'contact'].includes(sectionId)
                ? `#${sectionId}`
                : '#';

              return (
                <li key={item}>
                  {href === '#' ? (
                    <button
                      type="button"
                      aria-disabled="true"
                      className="cursor-not-allowed px-2 py-1 transition hover:text-white"
                    >
                      {item}
                    </button>
                  ) : (
                    <a className="px-2 py-1 transition hover:text-white" href={href}>
                      {item}
                    </a>
                  )}
                </li>
              );
            })}
            <li>
              {/* Connect to ordering system here */}
              <button
                type="button"
                aria-disabled="true"
                className="cursor-not-allowed border border-[#5d5a54] px-4 py-2 text-[#f3f1ed] transition hover:border-[#f3f1ed]"
              >
                Order Online
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
