const navItems = ['About', 'Menu', 'Locations', 'Delivery', 'Contact'];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="site-header__top">
          <span>South Gate, CA</span>
          <span>Login · Bag 0</span>
        </div>
        <h1 className="site-header__brand">Grim Grounds Coffee</h1>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="menu">
        <div className="hero__inner">
          <div>
            <p className="hero__eyebrow">South Gate, CA 90280</p>
            <h2 className="hero__title">Coffee for the Cursed.</h2>
            <p className="hero__copy">
              Small-batch roasts, midnight pastries, and a candlelit space built for late-night
              regulars.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#order">
                Order Online
              </a>
              <span className="hero__meta">(562) 555-0199 · Open Late</span>
            </div>
          </div>
          <div className="hero__art" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}